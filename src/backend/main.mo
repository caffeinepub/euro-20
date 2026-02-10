import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  public type StreakData = {
    currentStreak : Nat;
    bestStreak : Nat;
    lastCompletionDate : Nat;
  };

  public type UpdateResult = {
    newStreak : Nat;
    bestStreak : Nat;
    lastCompletionDate : Nat;
    message : Text;
  };

  public type StreakComparison = { #consecutiveDay; #reset; #duplicate };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let streaks = Map.empty<Principal, StreakData>();

  public query ({ caller }) func getStreakData(user : Principal) : async StreakData {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own streak data");
    };
    switch (streaks.get(user)) {
      case (?data) { data };
      case (null) { { currentStreak = 0; bestStreak = 0; lastCompletionDate = 0 } };
    };
  };

  public shared ({ caller }) func recordDayCompletion(localDate : Nat) : async UpdateResult {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can record lesson completions");
    };
    await* recordDayCompletionInternal(caller, localDate);
  };

  public shared ({ caller }) func recordDayCompletionForUser(user : Principal, localDate : Nat) : async UpdateResult {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can record completions for others");
    };
    await* recordDayCompletionInternal(user, localDate);
  };

  func recordDayCompletionInternal(user : Principal, localDate : Nat) : async* UpdateResult {
    let streakData = switch (streaks.get(user)) {
      case (?data) { data };
      case (null) {
        {
          currentStreak = 1;
          bestStreak = 1;
          lastCompletionDate = localDate;
        };
      };
    };

    let updatedStreak : StreakData = switch (compareDay(
      streakData.lastCompletionDate,
      localDate,
    )) {
      case (#consecutiveDay) {
        {
          currentStreak = streakData.currentStreak + 1;
          bestStreak = Nat.max(
            streakData.bestStreak,
            streakData.currentStreak + 1,
          );
          lastCompletionDate = localDate;
        };
      };
      case (#reset) {
        {
          currentStreak = 1;
          bestStreak = streakData.bestStreak;
          lastCompletionDate = localDate;
        };
      };
      case (#duplicate) {
        streakData;
      };
    };

    streaks.add(user, updatedStreak);

    {
      newStreak = updatedStreak.currentStreak;
      bestStreak = updatedStreak.bestStreak;
      lastCompletionDate = updatedStreak.lastCompletionDate;
      message = "Streak updated successfully!";
    };
  };

  func compareDay(lastDate : Nat, currentDate : Nat) : StreakComparison {
    compareDates(lastDate, currentDate, Time.now());
  };

  func compareDates(last : Nat, current : Nat, currentTime : Int) : StreakComparison {
    let currentMillis = current * 1000_000_000;
    let lastMillis = last * 1000_000_000;
    let currentMillisDay = (currentTime / 1000_000_000 / 86400) * 86400;
    let currentNormalized = (currentMillis / 1000_000_000 / 86400) * 86400;
    let lastNormalized = (lastMillis / 1000_000_000 / 86400) * 86400;

    if (currentNormalized == currentMillisDay) {
      return #duplicate;
    };

    switch (Int.abs(currentNormalized - lastNormalized), Int.abs(currentNormalized - currentMillisDay)) {
      case (1, 1) { #consecutiveDay };
      case (_, 0) { #duplicate };
      case (_, _) { #reset };
    };
  };
};

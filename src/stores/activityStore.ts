import { makeAutoObservable } from "mobx";

class ActivityStore {
  activities = [];
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setActivities = (activities) => {
    this.activities = activities;
  };

  setLoadingInitial = (isLoading) => {
    this.loadingInitial = isLoading;
  };
}

const activityStore = new ActivityStore();
export default activityStore;
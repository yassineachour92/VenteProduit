import { makeAutoObservable } from "mobx";
import { product } from "../type";

class ActivityStore {
  activities:product[] = [];
  panier:product[]=[];
  loadingInitial:boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setActivities = (activities:product[]) => {
    this.activities = activities;
  };

  setPanier = (panier:product[]) => {
    this.panier = panier;
  };

  addProduct(product: product) {
    this.panier.push(product);
  }

  setLoadingInitial = (isLoading:boolean) => {
    this.loadingInitial = isLoading;
  };
}

const activityStore = new ActivityStore();
export default activityStore;
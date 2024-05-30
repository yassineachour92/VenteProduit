import { makeAutoObservable } from "mobx";
import { ProductType } from "../type";

interface activityStore {
  products: ProductType[];
}

class ActivityStore {
  activities: ProductType[] = [];
  panier: ProductType[] = [];
  favoris: ProductType[] = [];
  loadingInitial: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  

  setActivities = (activities:any) => {
 
    this.activities = activities.products.map((activity:any) => ({
      ...activity,
      favorite: activity.favorite || false, 
    }));
    
  };

  setPanier = (panier: ProductType[]) => {
    this.panier = panier;
  };

  setFavoris = (favoris: ProductType[]) => {
    this.favoris = favoris;
  };

  addProduct(product: ProductType) {
    this.panier.push(product);
  }

  addFavoris(product: ProductType) {
    const existingProduct = this.favoris.find((item) => item.id === product.id);
    if (!existingProduct) {
      product.favoris = true;
      this.favoris.push(product);

    }
  }

  setLoadingInitial = (isLoading: boolean) => {
    this.loadingInitial = isLoading;
  };
}

const activityStore = new ActivityStore();
export default activityStore;
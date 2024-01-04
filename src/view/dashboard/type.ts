export interface tabItem {
    title: string;
    name: string;
  }
  
export interface tabData {
    list: Array<tabItem>;
    activeTabName: string | null;
  }

  
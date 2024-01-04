import { defineStore } from "pinia";
import {tabData} from './type'
const useTabsData = defineStore("tabsData", {
  state: (): tabData => ({
    list: [
        {
            title:'主页',
            name:'homePage'
        }
    ],
    activeTabName: 'homePage',
  }),
  getters: {},
  actions: {},
});

export default useTabsData;

import { de } from "element-plus/lib/locale";

const NameSpace = "Manage";
export default {
  getStorage() {
    return JSON.parse(localStorage.getItem(NameSpace || "{}") as string);
  },
  getItem(key: string) {
    return this.getStorage()[key];
  },
  setItem(key: string, val: string) {
    const storage = this.getStorage();
    storage[key] = val;
    localStorage.setItem(NameSpace, JSON.stringify(storage));
  },
  clearItem(key: string) {
    const storage = this.getStorage();
    delete storage[key];
    localStorage.setItem(NameSpace, JSON.stringify(storage));
  },
  clearAll() {
    localStorage.clear();
  },
};

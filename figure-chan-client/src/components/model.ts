export type NavOptionList = {
  navOptTitle: string;
  navOptUrl: string;
  id: string;
};
export type NavOption = {
  navTitle: string;
  navOptions: Array<NavOptionList>;
};

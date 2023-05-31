export default class TabNav {
  constructor(dataList, dataContent) {
    this.dataList = document.querySelectorAll(dataList);
    this.dataContent = document.querySelectorAll(dataContent);
    this.activeClass = 'active'
    this.activeDataList = this.dataList[0];

    this.initTab = this.initTab.bind(this);

  }


    initTab(e) {
      this.dataContent.forEach((event) => event.classList.remove(this.activeClass));
      this.dataContent[e].classList.add(this.activeClass);
      const correspondingDataList = dataList[e];
      this.activeDataList.classList.remove(this.activeClass);
      correspondingDataList.classList.add(this.activeClass);
      this.activeDataList = correspondingDataList;
    }

    addEvent() {
      this.dataList.forEach((item, e) => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          this.initTab(e);
        });
      });  
    }

    init() {
      if (this.dataList.length && this.dataContent.length) {
            this.dataContent[0].classList.add(this.activeClass);
    this.activeDataList.classList.add(this.activeClass);
        this.addEvent();
      }
    }
}

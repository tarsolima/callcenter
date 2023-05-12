/* eslint-disable indent */
export default function accordion() {
    const dataList = document.querySelectorAll('[data-list]');
    const dataContent = document.querySelectorAll('[data-teste]');
    let activeDataList = dataList[0];
    dataContent[0].classList.add('active');
    activeDataList.classList.add('active');

    function initAccordion(e) {
      dataContent.forEach((event) => {
        event.classList.remove('active');
      });
      dataContent[e].classList.add('active');

      const correspondingDataList = dataList[e];

      activeDataList.classList.remove('active');

      correspondingDataList.classList.add('active');

      activeDataList = correspondingDataList;
    }

    dataList.forEach((item, e) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        initAccordion(e);
      });
    });
  }

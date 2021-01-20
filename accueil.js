let suggestion = tout;

const searchWrapper = document.querySelector(".search-box");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e) => {
    let j = 0;
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestion.filter((data) => {
            return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            if (j < 4) {
                j++;
                return data = '<li>' + data + '</li>';
            }
        });
        searchWrapper.classList.add("active");
        showSuggestion(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onClick", "select(this)");

        }
    } else {

    }

}

function select(element) {
    let selectUserData = element.textContent;
    window.top.postMessage(selectUserData, '*');
}

function showSuggestion(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';

    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
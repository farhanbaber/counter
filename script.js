let  para = document.querySelector("p")
function addNum() {
    let addNum = parseInt(para.innerText)
    para.innerText = addNum +1

}
function removeNum() {
    let removeNum = parseInt(para.innerText);
    para.innerText = removeNum -1 
}
function restart() {
    para.innerText = 0;
    
}
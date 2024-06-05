let searchinputele=document.getElementById("searchInput");
let searchresultsele=document.getElementById("searchResults");
let sppiner=document.getElementById("spinner");
function createresult(result)
{
    // create result item
    let  result_item=document.createElement("div")
    result_item.classList.add("result-item");
    searchresultsele.appendChild(result_item);
    //create title element
    let {link,title}=result;
    let title_ele=document.createElement("a");
    title_ele.href=link;
    title_ele.textContent=title;
    title_ele.target="_blank";
    title_ele.classList.add("result-title");
    result_item.appendChild(title_ele);
    //cretae break element
    let titlebreak=document.createElement("br");
    result_item.appendChild(titlebreak);
    //create url elemeent
    let url_ele=document.createElement("a");
    url_ele.classList.add("result-url");
    url_ele.href=link;
    url_ele.target="_blank";
    url_ele.textContent=link;
    result_item.appendChild(url_ele)
    //create break element
    let linkbreak=document.createElement("br");
    result_item.appendChild(linkbreak);
    //create decription element
    let{description}=result;
    let description_ele=document.createElement("p");
    description_ele.classList.add("link-description");
    description_ele.textContent=description;
    result_item.appendChild(description_ele);

}

function displayresults(search_results)
{
    sppiner.classList.toggle("d-none");
    for(let result of search_results)
        {
            createresult(result)
        }
}
function search(event)
{
    if(event.key==="Enter")

        {
            sppiner.classList.toggle("d-none");
            searchresultsele.textContent="";
            let searchinput=searchinputele.value;
            console.log(searchinput);
            let url="https://apis.ccbp.in/wiki\-search?search="+searchinput;
            let options={
                method:"GET"
            };
            fetch(url,options).then(function(response)
        {
            return response.json();
        })
        .then(function(jsondata)
    {
       let {search_results}= jsondata;
       displayresults(search_results);
    });

        }
}
searchinputele.addEventListener("keydown",search);
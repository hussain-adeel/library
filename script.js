const container = document.getElementById("lib");

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function submitForm()
{
    let title = document.getElementById('FORMtitle').value;
    let author = document.getElementById('FORMauthor').value;
    let pages = document.getElementById('FORMpages').value;
    let read;
    if (document.getElementById('FORMread').value === "read")
        read = true;
    else
        read = false;

    

    let tempBook = new Book(title, author, pages, read);

    addBookToLibrary(tempBook);

    document.getElementById('FORMauthor').value = "";
    document.getElementById('FORMtitle').value = "";
    document.getElementById('FORMpages').value = "";
    document.getElementById('FORMread').value = "read";

    return false;

    
}

function change(button)
{
    if (button.value == "read")
        button.value = "not read";
    else
        button.value = "read";
}

function getValue(Book)
{
    if (Book.read)
        return "read";
    else
        return "not read";
}

function deletebtn(j)
{
    myLibrary.splice(j , 1);
    updateDisplays();
}

function readToggle(j)
{
    if (myLibrary[j].read)
    {
        myLibrary[j].read = false;
    }
    else
    {
        myLibrary[j].read = true;
    }
    updateDisplays();
}

function updateDisplays()
{
    container.innerHTML = "";
    myLibrary.forEach(function(i, j)
    {
        console.log(i);
        container.innerHTML += 
        "<div id='book' class='book' data-index= "+ j + ">" +
        "<h2 class='title'>" + myLibrary[j].title + "</h2>" +
        "<h2>" + myLibrary[j].author + "</h2>" +
        "<h2><input type='number' value=" + myLibrary[j].pages + "></h2>" +
        "<h2><input type='button' onclick='readToggle(" + j + ")' id='readbtn' value='" + getValue(myLibrary[j]) + "' class=" + myLibrary[j].read + " button></h2>" +
        "<h2><input type='button' id='deletebtn' onclick='deletebtn(" + j + ")' class='deletebtn' value='DELETE'></h2>" +
        "</div>"
    });

}

function addBookToLibrary(Book)
{
    myLibrary.push(Book);
    updateDisplays();
}

let myLibrary = [];


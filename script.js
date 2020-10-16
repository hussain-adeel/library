let myLibrary = [];

function readBookToggle()
{
    if (read) Book.read = false;
    else read = true;
}

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function()
    {
        return read ? 
        title + " by " + author + ", " + pages + " pages, " + "read" 
        : title + " by " + author + ", " + pages + " pages, " + "not read";
    }
}

function addBookToLibrary(Book)
{
    myLibrary.push(Book)
}
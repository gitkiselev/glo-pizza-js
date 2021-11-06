const renderItems = (data) => {
    console.log(data)
}

fetch("https://test-95a60-default-rtdb.firebaseio.com/partners.json")
  .then((response) => response.json())
  .then((data) => renderItems(data));
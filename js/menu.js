const renderItems = (data) => {};

fetch(`./db/partners.json`)
  .then((response) => response.json())
  .then((data) => renderItems(data));

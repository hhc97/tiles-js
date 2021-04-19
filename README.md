# tiles.js

Final submission deployed at -> [https://tiles-js.herokuapp.com/](https://tiles-js.herokuapp.com/)

## Getting started

To get started with tiles.js, you'll need to include [jQuery](https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js) and [tiles.js](https://tiles-js.herokuapp.com/js/tiles.js) in your HTML page as shown below:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- first load jQuery -->
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- then load tiles.js -->
    <script defer type="text/javascript" src='https://tiles-js.herokuapp.com/js/tiles.js'></script>
    <!-- then load a script that depends on tiles.js -->
    <script defer type="text/javascript" src='js/examples.js'></script>
</head>
```
By default, tiles.js assigns itself to the global `Tiles` variable when loaded. If the `Tiles` variable is already in use, it will not be overwritten.  
Once loaded, you can get an instance of Tiles by calling its constructor:
```
const tiles = new Tiles({container: 'id'})
```
Note that you **must** create a new instance of `Tiles` for each section of tiles that you want to create, or there could be unintended behavior.
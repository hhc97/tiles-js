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


## Constructors
There is only one constructor required to use tiles.js, and it has one required value, with a few other optional parameters. A constructor call with every possible option is shown below:
```
new Tiles({
    container: 'demo1',
    width: 100,
    height: 100,
    animate: true,
    animate_factor: 5,
    color_cycle: true,
    nodrag: true,
    tile_gap: 30,
    num_horizontal: 2
})
```
The parameters are provided in the form of a javascript object, so optional parameters can be left if desired.  
**Required options**
- **container**
    - `Type`: `string`
    - `Default value`: `none`
    - `Description`: In order to use tiles.js, you must provide it a `<div>` element with a unique `id` in which you want to display tiles.
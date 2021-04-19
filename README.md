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
The parameters are provided in the form of a javascript object, so optional parameters can be left out if desired.  
**Required parameters**
- **container**
    - `Type`: `string`
    - `Default value`: `none`
    - `Description`: In order to use tiles.js, you must provide it a `<div>` element with a unique `id` in which you want to display tiles. The value of the `id` goes into this parameter.  

**Optional parameters**
- **width**
    - `Type`: `number (integer)`
    - `Default value`: `100`
    - `Description`: The width you want the tiles in this section to be.
- **height**
    - `Type`: `number (integer)`
    - `Default value`: `100`
    - `Description`: The height you want the tiles in this section to be.
- **animate**
    - `Type`: `boolean`
    - `Default value`: `true`
    - `Description`: On hover, you can choose to allow the tiles to slightly expand in an animation. This gives the user a visual cue that the tile is being hovered across. The content in the tile will expand along with the tile.
- **animate_factor**
    - `Type`: `number (float)`
    - `Default value`: `1.05`
    - `Description`: If `animate` is set to `true`, then you can optionally specify how much you want your tiles to expand when they are being hovered over. The default value of 5% looks good in most situations, but you have the option of choosing your own expansion factor.
- **color_cycle**
    - `Type`: `boolean`
    - `Default value`: `false`
    - `Description`: This option enables the color gradient around each tile to constantly change color. The colors are generated randomly and slowly change randomly as well. It is useful for when the theme of the website is a little less serious!
- **nodrag**
    - `Type`: `boolean`
    - `Default value`: `false`
    - `Description`: By default, tiles in a section can be dragged around and the user can swap the positions of tiles by dragging and dropping. Setting this option to `true` will prevent tiles from being dragged, which is useful for when you have tiles that must display content in a certain order.
- **tile_gap**
    - `Type`: `number (integer)`
    - `Default value`: `30`
    - `Description`: This option adjusts the width of the gap between tiles.
- **num_horizontal**
    - `Type`: `number (integer)`
    - `Default value`: `Infinity`
    - `Description`: This option specifies the maximum number of horizontally adjacent tiles in the current section. Note that if the viewport width cannot accomodate so many tiles, then this value is automatically capped.


## API methods
Once you have created an instance of `Tiles`, these are the API methods that can be called:
- `Tiles`.`addTile({options})`
    - test
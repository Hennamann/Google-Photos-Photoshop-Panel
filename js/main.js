/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

var csInterface = new CSInterface();   
var gExtensionId = "com.henrikstabell.googlephotos";

    function Persistent(inOn) { // Stop photoshop from unloading Google Photos

        if (inOn){
            var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        } else {
            var event = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION");
        }
        event.extensionId = gExtensionId;
        csInterface.dispatchEvent(event);
    }

    Persistent(true); //persistent to prevent extension from unloading

function onLoaded()
    {
        window.location.href = "https://photos.google.com/";
    }
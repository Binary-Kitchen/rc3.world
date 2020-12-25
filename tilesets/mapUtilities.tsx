<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.3" name="mapUtilities" tilewidth="32" tileheight="32" tilecount="9" columns="9">
 <image source="../../world-map-starterkit/tiles_png/community/cert/imgs/tilesheets/mapUtilities.png" width="288" height="32"/>
 <tile id="0" type="EXIT">
  <properties>
   <property name="exitUrl" value="foo.json#bar"/>
  </properties>
 </tile>
 <tile id="1" type="START">
  <properties>
   <property name="startLayer" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="2" type="INVIS"/>
 <tile id="3" type="BLOCK">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="4" type="SILENT">
  <properties>
   <property name="silent" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="5" type="AUDIO"/>
 <tile id="6" type="CHANGE"/>
 <tile id="7" type="MISC"/>
 <tile id="8" type="URL">
  <properties>
   <property name="openWebsite" value="https://streaming.media.ccc.de/"/>
  </properties>
 </tile>
</tileset>

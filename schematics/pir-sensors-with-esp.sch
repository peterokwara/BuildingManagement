<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE eagle SYSTEM "eagle.dtd">
<eagle version="9.3.0">
<drawing>
<settings>
<setting alwaysvectorfont="no"/>
<setting verticaltext="up"/>
</settings>
<grid distance="0.1" unitdist="inch" unit="inch" style="lines" multiple="1" display="no" altdistance="0.01" altunitdist="inch" altunit="inch"/>
<layers>
<layer number="1" name="Top" color="4" fill="1" visible="no" active="no"/>
<layer number="16" name="Bottom" color="1" fill="1" visible="no" active="no"/>
<layer number="17" name="Pads" color="2" fill="1" visible="no" active="no"/>
<layer number="18" name="Vias" color="2" fill="1" visible="no" active="no"/>
<layer number="19" name="Unrouted" color="6" fill="1" visible="no" active="no"/>
<layer number="20" name="Dimension" color="15" fill="1" visible="no" active="no"/>
<layer number="21" name="tPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="22" name="bPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="23" name="tOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="24" name="bOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="25" name="tNames" color="3" fill="1" visible="no" active="no"/>
<layer number="26" name="bNames" color="7" fill="1" visible="no" active="no"/>
<layer number="27" name="tValues" color="15" fill="1" visible="no" active="no"/>
<layer number="28" name="bValues" color="15" fill="1" visible="no" active="no"/>
<layer number="29" name="tStop" color="7" fill="3" visible="no" active="no"/>
<layer number="30" name="bStop" color="7" fill="6" visible="no" active="no"/>
<layer number="31" name="tCream" color="7" fill="4" visible="no" active="no"/>
<layer number="32" name="bCream" color="7" fill="5" visible="no" active="no"/>
<layer number="33" name="tFinish" color="6" fill="3" visible="no" active="no"/>
<layer number="34" name="bFinish" color="6" fill="6" visible="no" active="no"/>
<layer number="35" name="tGlue" color="7" fill="4" visible="no" active="no"/>
<layer number="36" name="bGlue" color="7" fill="5" visible="no" active="no"/>
<layer number="37" name="tTest" color="7" fill="1" visible="no" active="no"/>
<layer number="38" name="bTest" color="7" fill="1" visible="no" active="no"/>
<layer number="39" name="tKeepout" color="4" fill="11" visible="no" active="no"/>
<layer number="40" name="bKeepout" color="1" fill="11" visible="no" active="no"/>
<layer number="41" name="tRestrict" color="4" fill="10" visible="no" active="no"/>
<layer number="42" name="bRestrict" color="1" fill="10" visible="no" active="no"/>
<layer number="43" name="vRestrict" color="2" fill="10" visible="no" active="no"/>
<layer number="44" name="Drills" color="7" fill="1" visible="no" active="no"/>
<layer number="45" name="Holes" color="7" fill="1" visible="no" active="no"/>
<layer number="46" name="Milling" color="3" fill="1" visible="no" active="no"/>
<layer number="47" name="Measures" color="7" fill="1" visible="no" active="no"/>
<layer number="48" name="Document" color="7" fill="1" visible="no" active="no"/>
<layer number="49" name="Reference" color="7" fill="1" visible="no" active="no"/>
<layer number="51" name="tDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="52" name="bDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="88" name="SimResults" color="9" fill="1" visible="yes" active="yes"/>
<layer number="89" name="SimProbes" color="9" fill="1" visible="yes" active="yes"/>
<layer number="90" name="Modules" color="5" fill="1" visible="yes" active="yes"/>
<layer number="91" name="Nets" color="2" fill="1" visible="yes" active="yes"/>
<layer number="92" name="Busses" color="1" fill="1" visible="yes" active="yes"/>
<layer number="93" name="Pins" color="2" fill="1" visible="no" active="yes"/>
<layer number="94" name="Symbols" color="4" fill="1" visible="yes" active="yes"/>
<layer number="95" name="Names" color="7" fill="1" visible="yes" active="yes"/>
<layer number="96" name="Values" color="7" fill="1" visible="yes" active="yes"/>
<layer number="97" name="Info" color="7" fill="1" visible="yes" active="yes"/>
<layer number="98" name="Guide" color="6" fill="1" visible="yes" active="yes"/>
<layer number="101" name="Hidden" color="15" fill="1" visible="yes" active="yes"/>
<layer number="102" name="Changes" color="12" fill="1" visible="yes" active="yes"/>
</layers>
<schematic xreflabel="%F%N/%S.%C%R" xrefpart="/%S.%C%R">
<libraries>
<library name="diy-modules">
<description>&lt;b&gt;DIY Modules for Arduino, Raspberry Pi, CubieBoard etc.&lt;/b&gt;
&lt;br&gt;&lt;br&gt;
The library contains a list of symbols and footprints for popular, cheap and easy-to-use electronic modules.&lt;br&gt;
The modules are intend to work with microprocessor-based platforms such as &lt;a href="http://arduino.cc"&gt;Arduino&lt;/a&gt;, &lt;a href="http://raspberrypi.org/"&gt;Raspberry Pi&lt;/a&gt;, &lt;a href="http://cubieboard.org/"&gt;CubieBoard&lt;/a&gt;, &lt;a href="http://beagleboard.org/"&gt;BeagleBone&lt;/a&gt; and many others. There are many manufacturers of the modules in the world. Almost all of them can be bought on &lt;a href="ebay.com"&gt;ebay.com&lt;/a&gt;.&lt;br&gt;
&lt;br&gt;
By using this library, you can design a PCB for devices created with usage of modules. Even if you do not need to create PCB design, you can also use the library to quickly document your work by drawing schematics of devices built by you.&lt;br&gt;
&lt;br&gt;
The latest version, examples, photos and much more can be found at: &lt;b&gt;&lt;a href="http://diymodules.org/eagle"&gt;diymodules.org/eagle&lt;/a&gt;&lt;/b&gt;&lt;br&gt;&lt;br&gt;
Comments, suggestions and bug reports please send to: &lt;b&gt;&lt;a href="mailto:eagle@diymodules.org"&gt;eagle@diymodules.org&lt;/b&gt;&lt;/a&gt;&lt;br&gt;&lt;br&gt;
&lt;i&gt;Version: 1.8.0 (2017-Jul-02)&lt;/i&gt;&lt;br&gt;
&lt;i&gt;Created by: Miroslaw Brudnowski&lt;/i&gt;&lt;br&gt;&lt;br&gt;
&lt;i&gt;Released under the Creative Commons Attribution 4.0 International License: &lt;a href="http://creativecommons.org/licenses/by/4.0"&gt;http://creativecommons.org/licenses/by/4.0&lt;/a&gt;&lt;/i&gt;
&lt;br&gt;&lt;br&gt;
&lt;center&gt;
&lt;a href="http://diymodules.org/eagle"&gt;&lt;img src="http://www.diymodules.org/img/diymodules-lbr-image.php?v=1.8.0" alt="DIYmodules.org"&gt;&lt;/a&gt;
&lt;/center&gt;</description>
<packages>
<package name="MOTION-PIR-DYP-ME003">
<description>&lt;b&gt;PIR Motion Sensor Module DYP-ME003&lt;/b&gt; based on &lt;b&gt;BISS0001&lt;/b&gt; pyroelectic detector</description>
<wire x1="-16.256" y1="12.192" x2="16.256" y2="12.192" width="0.127" layer="21"/>
<wire x1="16.256" y1="12.192" x2="16.256" y2="-12.192" width="0.127" layer="21"/>
<wire x1="16.256" y1="-12.192" x2="-16.256" y2="-12.192" width="0.127" layer="21"/>
<wire x1="-16.256" y1="-12.192" x2="-16.256" y2="12.192" width="0.127" layer="21"/>
<hole x="-14.1" y="0" drill="1.8"/>
<hole x="14.1" y="0" drill="1.8"/>
<circle x="0" y="0" radius="11.5" width="0.127" layer="21"/>
<wire x1="-11.5" y1="11.5" x2="11.5" y2="11.5" width="0.127" layer="21"/>
<wire x1="11.5" y1="11.5" x2="11.5" y2="-11.5" width="0.127" layer="21"/>
<wire x1="11.5" y1="-11.5" x2="-11.5" y2="-11.5" width="0.127" layer="21"/>
<wire x1="-11.5" y1="-11.5" x2="-11.5" y2="11.5" width="0.127" layer="21"/>
<pad name="1" x="-2.54" y="-10.16" drill="1" shape="square"/>
<pad name="2" x="0" y="-10.16" drill="1"/>
<pad name="3" x="2.54" y="-10.16" drill="1"/>
<wire x1="-3.81" y1="-9.525" x2="-3.175" y2="-8.89" width="0.127" layer="21"/>
<wire x1="-3.175" y1="-8.89" x2="-1.905" y2="-8.89" width="0.127" layer="21"/>
<wire x1="-1.905" y1="-8.89" x2="-1.27" y2="-9.525" width="0.127" layer="21"/>
<wire x1="-1.27" y1="-9.525" x2="-0.635" y2="-8.89" width="0.127" layer="21"/>
<wire x1="-0.635" y1="-8.89" x2="0.635" y2="-8.89" width="0.127" layer="21"/>
<wire x1="0.635" y1="-8.89" x2="1.27" y2="-9.525" width="0.127" layer="21"/>
<wire x1="1.27" y1="-9.525" x2="1.905" y2="-8.89" width="0.127" layer="21"/>
<wire x1="1.905" y1="-8.89" x2="3.175" y2="-8.89" width="0.127" layer="21"/>
<wire x1="3.175" y1="-8.89" x2="3.81" y2="-9.525" width="0.127" layer="21"/>
<wire x1="3.81" y1="-9.525" x2="3.81" y2="-10.795" width="0.127" layer="21"/>
<wire x1="3.81" y1="-10.795" x2="3.175" y2="-11.43" width="0.127" layer="21"/>
<wire x1="3.175" y1="-11.43" x2="1.905" y2="-11.43" width="0.127" layer="21"/>
<wire x1="1.905" y1="-11.43" x2="1.27" y2="-10.795" width="0.127" layer="21"/>
<wire x1="1.27" y1="-10.795" x2="0.635" y2="-11.43" width="0.127" layer="21"/>
<wire x1="0.635" y1="-11.43" x2="-0.635" y2="-11.43" width="0.127" layer="21"/>
<wire x1="-0.635" y1="-11.43" x2="-1.27" y2="-10.795" width="0.127" layer="21"/>
<wire x1="-1.27" y1="-10.795" x2="-1.905" y2="-11.43" width="0.127" layer="21"/>
<wire x1="-1.905" y1="-11.43" x2="-3.175" y2="-11.43" width="0.127" layer="21"/>
<wire x1="-3.175" y1="-11.43" x2="-3.81" y2="-10.795" width="0.127" layer="21"/>
<wire x1="-3.81" y1="-10.795" x2="-3.81" y2="-9.525" width="0.127" layer="21"/>
<wire x1="-1.27" y1="0" x2="1.27" y2="0" width="0.127" layer="21"/>
<wire x1="0" y1="1.27" x2="0" y2="-1.27" width="0.127" layer="21"/>
<text x="0" y="13.335" size="1.27" layer="25" align="bottom-center">&gt;NAME</text>
<text x="0" y="-13.335" size="1.27" layer="27" align="top-center">&gt;VALUE</text>
</package>
<package name="WIRELESS-WIFI-ESP-01">
<description>&lt;b&gt;Wireless Wi-Fi ESP-01 Module&lt;/b&gt; based on &lt;b&gt;ESP8266&lt;/b&gt; chip</description>
<wire x1="-12.7" y1="7.366" x2="6.35" y2="7.366" width="0.127" layer="21"/>
<wire x1="6.35" y1="7.366" x2="12.7" y2="7.366" width="0.127" layer="21"/>
<wire x1="12.7" y1="7.366" x2="12.7" y2="-7.366" width="0.127" layer="21"/>
<wire x1="12.7" y1="-7.366" x2="6.35" y2="-7.366" width="0.127" layer="21"/>
<wire x1="6.35" y1="-7.366" x2="-12.7" y2="-7.366" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-7.366" x2="-12.7" y2="-4.445" width="0.127" layer="21"/>
<pad name="A1" x="-8.89" y="3.81" drill="1" shape="square"/>
<pad name="B1" x="-8.89" y="1.27" drill="1"/>
<pad name="C1" x="-8.89" y="-1.27" drill="1"/>
<pad name="C2" x="-11.43" y="-1.27" drill="1"/>
<pad name="B2" x="-11.43" y="1.27" drill="1"/>
<pad name="A2" x="-11.43" y="3.81" drill="1"/>
<pad name="D2" x="-11.43" y="-3.81" drill="1"/>
<pad name="D1" x="-8.89" y="-3.81" drill="1" shape="square"/>
<wire x1="-12.7" y1="-4.445" x2="-12.7" y2="-3.175" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-3.175" x2="-12.7" y2="-1.905" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-1.905" x2="-12.7" y2="-0.635" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-0.635" x2="-12.7" y2="0.635" width="0.127" layer="21"/>
<wire x1="-12.7" y1="0.635" x2="-12.7" y2="1.905" width="0.127" layer="21"/>
<wire x1="-12.7" y1="1.905" x2="-12.7" y2="3.175" width="0.127" layer="21"/>
<wire x1="-12.7" y1="3.175" x2="-12.7" y2="4.445" width="0.127" layer="21"/>
<wire x1="-12.7" y1="4.445" x2="-12.7" y2="7.366" width="0.127" layer="21"/>
<wire x1="6.35" y1="7.366" x2="6.35" y2="-7.366" width="0.127" layer="21"/>
<text x="9.525" y="0" size="1.778" layer="21" rot="R90" align="center">ANTENNA</text>
<wire x1="-12.7" y1="4.445" x2="-12.065" y2="5.08" width="0.127" layer="21"/>
<wire x1="-12.065" y1="5.08" x2="-10.795" y2="5.08" width="0.127" layer="21"/>
<wire x1="-10.795" y1="5.08" x2="-10.16" y2="4.445" width="0.127" layer="21"/>
<wire x1="-10.16" y1="4.445" x2="-9.525" y2="5.08" width="0.127" layer="21"/>
<wire x1="-9.525" y1="5.08" x2="-8.255" y2="5.08" width="0.127" layer="21"/>
<wire x1="-8.255" y1="5.08" x2="-7.62" y2="4.445" width="0.127" layer="21"/>
<wire x1="-7.62" y1="4.445" x2="-7.62" y2="3.175" width="0.127" layer="21"/>
<wire x1="-7.62" y1="3.175" x2="-8.255" y2="2.54" width="0.127" layer="21"/>
<wire x1="-8.255" y1="2.54" x2="-7.62" y2="1.905" width="0.127" layer="21"/>
<wire x1="-7.62" y1="1.905" x2="-7.62" y2="0.635" width="0.127" layer="21"/>
<wire x1="-7.62" y1="0.635" x2="-8.255" y2="0" width="0.127" layer="21"/>
<wire x1="-8.255" y1="0" x2="-7.62" y2="-0.635" width="0.127" layer="21"/>
<wire x1="-7.62" y1="-0.635" x2="-7.62" y2="-1.905" width="0.127" layer="21"/>
<wire x1="-7.62" y1="-1.905" x2="-8.255" y2="-2.54" width="0.127" layer="21"/>
<wire x1="-8.255" y1="-2.54" x2="-7.62" y2="-3.175" width="0.127" layer="21"/>
<wire x1="-7.62" y1="-3.175" x2="-7.62" y2="-4.445" width="0.127" layer="21"/>
<wire x1="-7.62" y1="-4.445" x2="-8.255" y2="-5.08" width="0.127" layer="21"/>
<wire x1="-8.255" y1="-5.08" x2="-9.525" y2="-5.08" width="0.127" layer="21"/>
<wire x1="-9.525" y1="-5.08" x2="-10.16" y2="-4.445" width="0.127" layer="21"/>
<wire x1="-10.16" y1="-4.445" x2="-10.795" y2="-5.08" width="0.127" layer="21"/>
<wire x1="-10.795" y1="-5.08" x2="-12.065" y2="-5.08" width="0.127" layer="21"/>
<wire x1="-12.065" y1="-5.08" x2="-12.7" y2="-4.445" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-3.175" x2="-12.065" y2="-2.54" width="0.127" layer="21"/>
<wire x1="-12.065" y1="-2.54" x2="-12.7" y2="-1.905" width="0.127" layer="21"/>
<wire x1="-12.7" y1="-0.635" x2="-12.065" y2="0" width="0.127" layer="21"/>
<wire x1="-12.065" y1="0" x2="-12.7" y2="0.635" width="0.127" layer="21"/>
<wire x1="-12.7" y1="1.905" x2="-12.065" y2="2.54" width="0.127" layer="21"/>
<wire x1="-12.065" y1="2.54" x2="-12.7" y2="3.175" width="0.127" layer="21"/>
<text x="0" y="8.255" size="1.27" layer="25" align="bottom-center">&gt;NAME</text>
<text x="0" y="-8.255" size="1.27" layer="27" align="top-center">&gt;VALUE</text>
</package>
</packages>
<symbols>
<symbol name="MOTION-PIR-DYP-ME003">
<description>&lt;b&gt;PIR Motion Sensor Module DYP-ME003&lt;/b&gt; based on &lt;b&gt;BISS0001&lt;/b&gt; pyroelectic detector</description>
<pin name="GND" x="-2.54" y="-20.32" length="middle" direction="pwr" rot="R90"/>
<pin name="OUT" x="0" y="-20.32" length="middle" direction="out" rot="R90"/>
<pin name="VCC" x="2.54" y="-20.32" length="middle" direction="pwr" rot="R90"/>
<wire x1="-12.7" y1="15.24" x2="12.7" y2="15.24" width="0.254" layer="94"/>
<wire x1="12.7" y1="15.24" x2="12.7" y2="-15.24" width="0.254" layer="94"/>
<wire x1="12.7" y1="-15.24" x2="-12.7" y2="-15.24" width="0.254" layer="94"/>
<wire x1="-12.7" y1="-15.24" x2="-12.7" y2="15.24" width="0.254" layer="94"/>
<circle x="0" y="2.54" radius="10.16" width="0.254" layer="94"/>
<text x="0" y="2.54" size="2.54" layer="94" align="center">PIR</text>
<text x="-12.7" y="20.32" size="1.778" layer="95">&gt;NAME</text>
<text x="-12.7" y="17.78" size="1.778" layer="96">&gt;VALUE</text>
</symbol>
<symbol name="WIRELESS-WIFI-ESP-01">
<description>&lt;b&gt;Wireless Wi-Fi ESP-01 Module&lt;/b&gt; based on &lt;b&gt;ESP8266&lt;/b&gt; chip</description>
<pin name="GND" x="-22.86" y="10.16" length="middle" direction="pwr"/>
<pin name="UTXD" x="-22.86" y="7.62" length="middle"/>
<pin name="GPIO2" x="-22.86" y="5.08" length="middle"/>
<pin name="CH_PD" x="-22.86" y="2.54" length="middle"/>
<pin name="GPIO0" x="-22.86" y="0" length="middle"/>
<pin name="RST" x="-22.86" y="-2.54" length="middle"/>
<pin name="URXD" x="-22.86" y="-5.08" length="middle"/>
<pin name="VCC" x="-22.86" y="-7.62" length="middle" direction="pwr"/>
<wire x1="-17.78" y1="12.7" x2="5.08" y2="12.7" width="0.254" layer="94"/>
<wire x1="5.08" y1="12.7" x2="17.78" y2="12.7" width="0.254" layer="94"/>
<wire x1="17.78" y1="12.7" x2="17.78" y2="-10.16" width="0.254" layer="94"/>
<wire x1="17.78" y1="-10.16" x2="5.08" y2="-10.16" width="0.254" layer="94"/>
<wire x1="5.08" y1="-10.16" x2="-17.78" y2="-10.16" width="0.254" layer="94"/>
<wire x1="-17.78" y1="-10.16" x2="-17.78" y2="12.7" width="0.254" layer="94"/>
<wire x1="5.08" y1="12.7" x2="5.08" y2="-10.16" width="0.254" layer="94"/>
<text x="11.43" y="1.27" size="2.54" layer="94" rot="R90" align="center">ANTENNA</text>
<text x="-17.78" y="17.78" size="1.778" layer="95">&gt;NAME</text>
<text x="-17.78" y="15.24" size="1.778" layer="96">&gt;VALUE</text>
</symbol>
</symbols>
<devicesets>
<deviceset name="MOTION-PIR-DYP-ME003">
<description>&lt;b&gt;PIR Motion Sensor Module DYP-ME003&lt;/b&gt; based on &lt;b&gt;BISS0001&lt;/b&gt; pyroelectic detector
&lt;p&gt;&lt;b&gt;&lt;a href="http://www.ebay.com/sch/dyp+me003"&gt;Click here to find device on ebay.com&lt;/a&gt;&lt;/b&gt;&lt;/p&gt;

&lt;p&gt;&lt;img alt="photo" src="http://www.diymodules.org/img/device-photo.php?name=MOTION-PIR-DYP-ME003"&gt;&lt;/p&gt;</description>
<gates>
<gate name="G$1" symbol="MOTION-PIR-DYP-ME003" x="0" y="0"/>
</gates>
<devices>
<device name="" package="MOTION-PIR-DYP-ME003">
<connects>
<connect gate="G$1" pin="GND" pad="1"/>
<connect gate="G$1" pin="OUT" pad="2"/>
<connect gate="G$1" pin="VCC" pad="3"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
<deviceset name="WIRELESS-WIFI-ESP-01">
<description>&lt;b&gt;Wireless Wi-Fi ESP-01 Module&lt;/b&gt; based on &lt;b&gt;ESP8266&lt;/b&gt; chip
&lt;p&gt;&lt;b&gt;&lt;a href="http://www.ebay.com/sch/esp8266+esp+01+transceiver"&gt;Click here to find device on ebay.com&lt;/a&gt;&lt;/b&gt;&lt;/p&gt;

&lt;p&gt;&lt;img alt="photo" src="http://www.diymodules.org/img/device-photo.php?name=WIRELESS-WIFI-ESP-01"&gt;&lt;/p&gt;</description>
<gates>
<gate name="G$1" symbol="WIRELESS-WIFI-ESP-01" x="0" y="0"/>
</gates>
<devices>
<device name="" package="WIRELESS-WIFI-ESP-01">
<connects>
<connect gate="G$1" pin="CH_PD" pad="B2"/>
<connect gate="G$1" pin="GND" pad="A1"/>
<connect gate="G$1" pin="GPIO0" pad="C1"/>
<connect gate="G$1" pin="GPIO2" pad="B1"/>
<connect gate="G$1" pin="RST" pad="C2"/>
<connect gate="G$1" pin="URXD" pad="D1"/>
<connect gate="G$1" pin="UTXD" pad="A2"/>
<connect gate="G$1" pin="VCC" pad="D2"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="special" urn="urn:adsk.eagle:library:367">
<description>&lt;b&gt;Special Devices&lt;/b&gt;&lt;p&gt;
7-segment displays, switches, heatsinks, crystals, transformers, etc.&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="BATTERY" urn="urn:adsk.eagle:footprint:26592/1" library_version="2">
<description>&lt;B&gt;BATTERY&lt;/B&gt;&lt;p&gt;
22 mm</description>
<wire x1="0.635" y1="2.54" x2="0.635" y2="0" width="0.1524" layer="21"/>
<wire x1="-2.54" y1="0" x2="-0.635" y2="0" width="0.1524" layer="21"/>
<wire x1="0.635" y1="0" x2="2.54" y2="0" width="0.1524" layer="21"/>
<wire x1="0.635" y1="0" x2="0.635" y2="-2.54" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-3.175" x2="2.54" y2="-3.175" width="0.1524" layer="21"/>
<wire x1="1.905" y1="-2.54" x2="1.905" y2="-3.81" width="0.1524" layer="21"/>
<circle x="0" y="0" radius="11.43" width="0.1524" layer="21"/>
<circle x="0" y="0" radius="10.2362" width="0.1524" layer="21"/>
<pad name="-" x="-5.715" y="0" drill="1.016" shape="long"/>
<pad name="+" x="9.525" y="-5.08" drill="1.016" shape="long"/>
<pad name="+@1" x="9.525" y="5.08" drill="1.016" shape="long"/>
<text x="-4.1656" y="6.35" size="1.778" layer="25" ratio="10">&gt;NAME</text>
<text x="-4.445" y="3.81" size="1.778" layer="27" ratio="10">&gt;VALUE</text>
<rectangle x1="-0.635" y1="-1.27" x2="0" y2="1.27" layer="21"/>
</package>
</packages>
<packages3d>
<package3d name="BATTERY" urn="urn:adsk.eagle:package:26670/1" type="box" library_version="2">
<description>BATTERY
22 mm</description>
<packageinstances>
<packageinstance name="BATTERY"/>
</packageinstances>
</package3d>
</packages3d>
<symbols>
<symbol name="BATTERY" urn="urn:adsk.eagle:symbol:26591/1" library_version="2">
<wire x1="-1.27" y1="3.81" x2="-1.27" y2="-3.81" width="0.4064" layer="94"/>
<wire x1="0" y1="1.27" x2="0" y2="-1.27" width="0.4064" layer="94"/>
<wire x1="1.27" y1="3.81" x2="1.27" y2="-3.81" width="0.4064" layer="94"/>
<wire x1="2.54" y1="1.27" x2="2.54" y2="-1.27" width="0.4064" layer="94"/>
<wire x1="-2.54" y1="0" x2="-1.524" y2="0" width="0.1524" layer="94"/>
<text x="-3.81" y="5.08" size="1.778" layer="95">&gt;NAME</text>
<text x="-3.81" y="-6.35" size="1.778" layer="96">&gt;VALUE</text>
<pin name="-" x="5.08" y="0" visible="off" length="short" direction="pwr" rot="R180"/>
<pin name="+" x="-5.08" y="0" visible="off" length="short" direction="pwr"/>
<pin name="+@1" x="-2.54" y="0" visible="off" length="short" direction="pwr" rot="R180"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="BATTERY" urn="urn:adsk.eagle:component:26693/1" prefix="BAT" uservalue="yes" library_version="2">
<description>&lt;B&gt;BATTERY&lt;/B&gt;</description>
<gates>
<gate name="G$1" symbol="BATTERY" x="0" y="0"/>
</gates>
<devices>
<device name="" package="BATTERY">
<connects>
<connect gate="G$1" pin="+" pad="+"/>
<connect gate="G$1" pin="+@1" pad="+@1"/>
<connect gate="G$1" pin="-" pad="-"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:26670/1"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
</libraries>
<attributes>
</attributes>
<variantdefs>
</variantdefs>
<classes>
<class number="0" name="default" width="0" drill="0">
</class>
</classes>
<parts>
<part name="U$1" library="diy-modules" deviceset="MOTION-PIR-DYP-ME003" device=""/>
<part name="U$2" library="diy-modules" deviceset="WIRELESS-WIFI-ESP-01" device=""/>
<part name="U$3" library="diy-modules" deviceset="MOTION-PIR-DYP-ME003" device=""/>
<part name="BAT1" library="special" library_urn="urn:adsk.eagle:library:367" deviceset="BATTERY" device="" package3d_urn="urn:adsk.eagle:package:26670/1"/>
</parts>
<sheets>
<sheet>
<plain>
<text x="-48.26" y="53.34" size="1.778" layer="91">3.3v Battery</text>
<text x="-20.32" y="109.22" size="1.778" layer="91">PIR Motion Sensor</text>
<text x="17.78" y="109.22" size="1.778" layer="91">PIR Motion Sensor</text>
<text x="66.04" y="109.22" size="1.778" layer="91">ESP 8266-01 </text>
</plain>
<instances>
<instance part="U$1" gate="G$1" x="27.94" y="81.28" smashed="yes">
<attribute name="NAME" x="15.24" y="101.6" size="1.778" layer="95"/>
<attribute name="VALUE" x="15.24" y="99.06" size="1.778" layer="96"/>
</instance>
<instance part="U$2" gate="G$1" x="76.2" y="83.82" smashed="yes" rot="R90">
<attribute name="NAME" x="58.42" y="66.04" size="1.778" layer="95" rot="R90"/>
<attribute name="VALUE" x="60.96" y="66.04" size="1.778" layer="96" rot="R90"/>
</instance>
<instance part="U$3" gate="G$1" x="-10.16" y="81.28" smashed="yes">
<attribute name="NAME" x="-22.86" y="101.6" size="1.778" layer="95"/>
<attribute name="VALUE" x="-22.86" y="99.06" size="1.778" layer="96"/>
</instance>
<instance part="BAT1" gate="G$1" x="-33.02" y="48.26" smashed="yes" rot="R90">
<attribute name="NAME" x="-38.1" y="44.45" size="1.778" layer="95" rot="R90"/>
<attribute name="VALUE" x="-26.67" y="44.45" size="1.778" layer="96" rot="R90"/>
</instance>
</instances>
<busses>
</busses>
<nets>
<net name="N$1" class="0">
<segment>
<pinref part="U$3" gate="G$1" pin="OUT"/>
<wire x1="-10.16" y1="60.96" x2="-10.16" y2="22.86" width="0.1524" layer="91"/>
<wire x1="-10.16" y1="22.86" x2="71.12" y2="22.86" width="0.1524" layer="91"/>
<pinref part="U$2" gate="G$1" pin="GPIO2"/>
<wire x1="71.12" y1="22.86" x2="71.12" y2="60.96" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$2" class="0">
<segment>
<pinref part="U$1" gate="G$1" pin="OUT"/>
<wire x1="27.94" y1="60.96" x2="27.94" y2="30.48" width="0.1524" layer="91"/>
<wire x1="27.94" y1="30.48" x2="76.2" y2="30.48" width="0.1524" layer="91"/>
<pinref part="U$2" gate="G$1" pin="GPIO0"/>
<wire x1="76.2" y1="30.48" x2="76.2" y2="60.96" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$3" class="0">
<segment>
<pinref part="U$3" gate="G$1" pin="GND"/>
<wire x1="-12.7" y1="60.96" x2="-12.7" y2="33.02" width="0.1524" layer="91"/>
<wire x1="-12.7" y1="33.02" x2="25.4" y2="33.02" width="0.1524" layer="91"/>
<pinref part="U$2" gate="G$1" pin="GND"/>
<wire x1="25.4" y1="33.02" x2="66.04" y2="33.02" width="0.1524" layer="91"/>
<wire x1="66.04" y1="33.02" x2="66.04" y2="60.96" width="0.1524" layer="91"/>
<pinref part="U$1" gate="G$1" pin="GND"/>
<wire x1="25.4" y1="60.96" x2="25.4" y2="33.02" width="0.1524" layer="91"/>
<junction x="25.4" y="33.02"/>
<pinref part="BAT1" gate="G$1" pin="+"/>
<wire x1="-33.02" y1="43.18" x2="-33.02" y2="33.02" width="0.1524" layer="91"/>
<wire x1="-33.02" y1="33.02" x2="-12.7" y2="33.02" width="0.1524" layer="91"/>
<junction x="-12.7" y="33.02"/>
</segment>
</net>
<net name="N$4" class="0">
<segment>
<pinref part="U$3" gate="G$1" pin="VCC"/>
<wire x1="-7.62" y1="60.96" x2="-7.62" y2="53.34" width="0.1524" layer="91"/>
<pinref part="BAT1" gate="G$1" pin="-"/>
<wire x1="-7.62" y1="53.34" x2="-33.02" y2="53.34" width="0.1524" layer="91"/>
<pinref part="U$1" gate="G$1" pin="VCC"/>
<wire x1="30.48" y1="60.96" x2="30.48" y2="53.34" width="0.1524" layer="91"/>
<wire x1="30.48" y1="53.34" x2="-7.62" y2="53.34" width="0.1524" layer="91"/>
<junction x="-7.62" y="53.34"/>
<pinref part="U$2" gate="G$1" pin="VCC"/>
<wire x1="83.82" y1="60.96" x2="83.82" y2="53.34" width="0.1524" layer="91"/>
<wire x1="83.82" y1="53.34" x2="73.66" y2="53.34" width="0.1524" layer="91"/>
<junction x="30.48" y="53.34"/>
<pinref part="U$2" gate="G$1" pin="CH_PD"/>
<wire x1="73.66" y1="53.34" x2="30.48" y2="53.34" width="0.1524" layer="91"/>
<wire x1="73.66" y1="60.96" x2="73.66" y2="53.34" width="0.1524" layer="91"/>
<junction x="73.66" y="53.34"/>
</segment>
</net>
</nets>
</sheet>
</sheets>
</schematic>
</drawing>
<compatibility>
<note version="8.2" severity="warning">
Since Version 8.2, EAGLE supports online libraries. The ids
of those online libraries will not be understood (or retained)
with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports URNs for individual library
assets (packages, symbols, and devices). The URNs of those assets
will not be understood (or retained) with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports the association of 3D packages
with devices in libraries, schematics, and board files. Those 3D
packages will not be understood (or retained) with this version.
</note>
</compatibility>
</eagle>

ol.proj.proj4.register(proj4);
ol.proj.get("OGC:CRS84").setExtent([-74.241971, 40.579702, -73.512253, 40.960855]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TotalPopulationPerCD_1 = new ol.format.GeoJSON();
var features_TotalPopulationPerCD_1 = format_TotalPopulationPerCD_1.readFeatures(json_TotalPopulationPerCD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_TotalPopulationPerCD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalPopulationPerCD_1.addFeatures(features_TotalPopulationPerCD_1);
var lyr_TotalPopulationPerCD_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalPopulationPerCD_1, 
                style: style_TotalPopulationPerCD_1,
                interactive: true,
    title: 'Total Population Per CD<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_0.png" /> 53120 - 63383<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_1.png" /> 63383 - 102927<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_2.png" /> 102927 - 125603<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_3.png" /> 125603 - 148465<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_4.png" /> 148465 - 173961<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_5.png" /> 173961 - 214744<br />\
    <img src="styles/legend/TotalPopulationPerCD_1_6.png" /> 214744 - 263039<br />'
        });
var format_UnemploymentPercentage_2 = new ol.format.GeoJSON();
var features_UnemploymentPercentage_2 = format_UnemploymentPercentage_2.readFeatures(json_UnemploymentPercentage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_UnemploymentPercentage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnemploymentPercentage_2.addFeatures(features_UnemploymentPercentage_2);
var lyr_UnemploymentPercentage_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnemploymentPercentage_2, 
                style: style_UnemploymentPercentage_2,
                interactive: true,
    title: 'Unemployment Percentage<br />\
    <img src="styles/legend/UnemploymentPercentage_2_0.png" /> 4 - 5<br />\
    <img src="styles/legend/UnemploymentPercentage_2_1.png" /> 5 - 7<br />\
    <img src="styles/legend/UnemploymentPercentage_2_2.png" /> 7 - 10<br />\
    <img src="styles/legend/UnemploymentPercentage_2_3.png" /> 10 - 13<br />\
    <img src="styles/legend/UnemploymentPercentage_2_4.png" /> 13 - 16<br />'
        });
var format_SNAPRecepientsHouseholdsPercentage_3 = new ol.format.GeoJSON();
var features_SNAPRecepientsHouseholdsPercentage_3 = format_SNAPRecepientsHouseholdsPercentage_3.readFeatures(json_SNAPRecepientsHouseholdsPercentage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_SNAPRecepientsHouseholdsPercentage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNAPRecepientsHouseholdsPercentage_3.addFeatures(features_SNAPRecepientsHouseholdsPercentage_3);
var lyr_SNAPRecepientsHouseholdsPercentage_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SNAPRecepientsHouseholdsPercentage_3, 
                style: style_SNAPRecepientsHouseholdsPercentage_3,
                interactive: true,
    title: 'SNAP Recepients Households Percentage<br />\
    <img src="styles/legend/SNAPRecepientsHouseholdsPercentage_3_0.png" /> 3 - 10.6<br />\
    <img src="styles/legend/SNAPRecepientsHouseholdsPercentage_3_1.png" /> 10.6 - 16.4<br />\
    <img src="styles/legend/SNAPRecepientsHouseholdsPercentage_3_2.png" /> 16.4 - 23<br />\
    <img src="styles/legend/SNAPRecepientsHouseholdsPercentage_3_3.png" /> 23 - 31.4<br />\
    <img src="styles/legend/SNAPRecepientsHouseholdsPercentage_3_4.png" /> 31.4 - 54<br />'
        });
var format_ChildObesityPercentage_4 = new ol.format.GeoJSON();
var features_ChildObesityPercentage_4 = format_ChildObesityPercentage_4.readFeatures(json_ChildObesityPercentage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_ChildObesityPercentage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChildObesityPercentage_4.addFeatures(features_ChildObesityPercentage_4);
var lyr_ChildObesityPercentage_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChildObesityPercentage_4, 
                style: style_ChildObesityPercentage_4,
                interactive: true,
    title: 'Child Obesity Percentage<br />\
    <img src="styles/legend/ChildObesityPercentage_4_0.png" /> 5 - 7<br />\
    <img src="styles/legend/ChildObesityPercentage_4_1.png" /> 7 - 11<br />\
    <img src="styles/legend/ChildObesityPercentage_4_2.png" /> 11 - 18<br />\
    <img src="styles/legend/ChildObesityPercentage_4_3.png" /> 18 - 22<br />\
    <img src="styles/legend/ChildObesityPercentage_4_4.png" /> 22 - 28<br />'
        });
var format_FoodInsecurityPercentage_5 = new ol.format.GeoJSON();
var features_FoodInsecurityPercentage_5 = format_FoodInsecurityPercentage_5.readFeatures(json_FoodInsecurityPercentage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_FoodInsecurityPercentage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodInsecurityPercentage_5.addFeatures(features_FoodInsecurityPercentage_5);
var lyr_FoodInsecurityPercentage_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FoodInsecurityPercentage_5, 
                style: style_FoodInsecurityPercentage_5,
                interactive: true,
    title: 'Food Insecurity Percentage<br />\
    <img src="styles/legend/FoodInsecurityPercentage_5_0.png" /> 7 - 10<br />\
    <img src="styles/legend/FoodInsecurityPercentage_5_1.png" /> 10 - 14<br />\
    <img src="styles/legend/FoodInsecurityPercentage_5_2.png" /> 14 - 18<br />\
    <img src="styles/legend/FoodInsecurityPercentage_5_3.png" /> 18 - 22<br />\
    <img src="styles/legend/FoodInsecurityPercentage_5_4.png" /> 22 - 27<br />'
        });
var format_CommunityDistricts_6 = new ol.format.GeoJSON();
var features_CommunityDistricts_6 = format_CommunityDistricts_6.readFeatures(json_CommunityDistricts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_CommunityDistricts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityDistricts_6.addFeatures(features_CommunityDistricts_6);
var lyr_CommunityDistricts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunityDistricts_6, 
                style: style_CommunityDistricts_6,
                interactive: true,
                title: '<img src="styles/legend/CommunityDistricts_6.png" /> Community Districts'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TotalPopulationPerCD_1.setVisible(true);lyr_UnemploymentPercentage_2.setVisible(false);lyr_SNAPRecepientsHouseholdsPercentage_3.setVisible(false);lyr_ChildObesityPercentage_4.setVisible(false);lyr_FoodInsecurityPercentage_5.setVisible(false);lyr_CommunityDistricts_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TotalPopulationPerCD_1,lyr_UnemploymentPercentage_2,lyr_SNAPRecepientsHouseholdsPercentage_3,lyr_ChildObesityPercentage_4,lyr_FoodInsecurityPercentage_5,lyr_CommunityDistricts_6];
lyr_TotalPopulationPerCD_1.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_UnemploymentPercentage_2.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_SNAPRecepientsHouseholdsPercentage_3.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_ChildObesityPercentage_4.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_FoodInsecurityPercentage_5.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_CommunityDistricts_6.set('fieldAliases', {'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'DATA CSV MAP Updated_QG ID': 'DATA CSV MAP Updated_QG ID', 'DATA CSV MAP Updated_CD Borough': 'DATA CSV MAP Updated_CD Borough', 'DATA CSV MAP Updated_CD Name': 'DATA CSV MAP Updated_CD Name', 'DATA CSV MAP Updated_Overall Pop': 'DATA CSV MAP Updated_Overall Pop', 'DATA CSV MAP Updated_Race White': 'DATA CSV MAP Updated_Race White', 'DATA CSV MAP Updated_Race Black': 'DATA CSV MAP Updated_Race Black', 'DATA CSV MAP Updated_Race Asian': 'DATA CSV MAP Updated_Race Asian', 'DATA CSV MAP Updated_Race Latino': 'DATA CSV MAP Updated_Race Latino', 'DATA CSV MAP Updated_Race Other': 'DATA CSV MAP Updated_Race Other', 'DATA CSV MAP Updated_Unemployment': 'DATA CSV MAP Updated_Unemployment', 'DATA CSV MAP Updated_Child Obesity': 'DATA CSV MAP Updated_Child Obesity', 'DATA CSV MAP Updated_Food Insec': 'DATA CSV MAP Updated_Food Insec', 'DATA CSV MAP Updated_SNAP Household': 'DATA CSV MAP Updated_SNAP Household', });
lyr_TotalPopulationPerCD_1.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_UnemploymentPercentage_2.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_SNAPRecepientsHouseholdsPercentage_3.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_ChildObesityPercentage_4.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_FoodInsecurityPercentage_5.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_CommunityDistricts_6.set('fieldImages', {'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'DATA CSV MAP Updated_QG ID': 'Range', 'DATA CSV MAP Updated_CD Borough': 'TextEdit', 'DATA CSV MAP Updated_CD Name': 'TextEdit', 'DATA CSV MAP Updated_Overall Pop': 'Range', 'DATA CSV MAP Updated_Race White': 'Range', 'DATA CSV MAP Updated_Race Black': 'Range', 'DATA CSV MAP Updated_Race Asian': 'Range', 'DATA CSV MAP Updated_Race Latino': 'Range', 'DATA CSV MAP Updated_Race Other': 'Range', 'DATA CSV MAP Updated_Unemployment': 'Range', 'DATA CSV MAP Updated_Child Obesity': 'Range', 'DATA CSV MAP Updated_Food Insec': 'Range', 'DATA CSV MAP Updated_SNAP Household': 'Range', });
lyr_TotalPopulationPerCD_1.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_UnemploymentPercentage_2.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_SNAPRecepientsHouseholdsPercentage_3.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_ChildObesityPercentage_4.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_FoodInsecurityPercentage_5.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_CommunityDistricts_6.set('fieldLabels', {'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'DATA CSV MAP Updated_QG ID': 'no label', 'DATA CSV MAP Updated_CD Borough': 'no label', 'DATA CSV MAP Updated_CD Name': 'no label', 'DATA CSV MAP Updated_Overall Pop': 'no label', 'DATA CSV MAP Updated_Race White': 'no label', 'DATA CSV MAP Updated_Race Black': 'no label', 'DATA CSV MAP Updated_Race Asian': 'no label', 'DATA CSV MAP Updated_Race Latino': 'no label', 'DATA CSV MAP Updated_Race Other': 'no label', 'DATA CSV MAP Updated_Unemployment': 'no label', 'DATA CSV MAP Updated_Child Obesity': 'no label', 'DATA CSV MAP Updated_Food Insec': 'no label', 'DATA CSV MAP Updated_SNAP Household': 'no label', });
lyr_CommunityDistricts_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
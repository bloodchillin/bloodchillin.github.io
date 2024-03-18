var xppoles = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [274,143]},
            "type": "Feature","properties": {"popupContent": "TEST 1"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [522,239]},
            "type": "Feature","properties": {"popupContent": "TEST 2"},
            "id": 2}
    ]
};

var chests = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [274,143]},
            "type": "Feature","properties": {"popupContent": "TEST 1"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [522,239]},
            "type": "Feature","properties": {"popupContent": "TEST 2"},
            "id": 2}
    ]
};

var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [100,100],[100,200],[200,200],[200,100]
                ]
            ]
        ]
    }
};

var Waypoints = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [1060,984]},
            "type": "Feature","properties": {"popupContent": "Lynbore, Tavern"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [1572,1140]},
            "type": "Feature","properties": {"popupContent": "Lynbore, East"},
            "id": 2},
		{"geometry": {"type": "Point","coordinates": [1884,1468]},
            "type": "Feature","properties": {"popupContent": "Aston, South"},
            "id": 3},
		{"geometry": {"type": "Point","coordinates": [1964,1904]},
            "type": "Feature","properties": {"popupContent": "Aston, Crossroads"},
            "id": 4},
		{"geometry": {"type": "Point","coordinates": [1596,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, West"},
            "id": 5},
		{"geometry": {"type": "Point","coordinates": [2424,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, East"},
            "id": 6},
		{"geometry": {"type": "Point","coordinates": [1980,912]},
            "type": "Feature","properties": {"popupContent": "Forgotten Canyon"},
            "id": 7},
		{"geometry": {"type": "Point","coordinates": [2844,2660]},
            "type": "Feature","properties": {"popupContent": "Lizard Temple, North"},
            "id": 8},
		{"geometry": {"type": "Point","coordinates": [2964,1464]},
            "type": "Feature","properties": {"popupContent": "Temple of Osiris"},
            "id": 9},
		{"geometry": {"type": "Point","coordinates": [2048,2048]},
            "type": "Feature","properties": {"popupContent": "Neiseer, West"},
            "id": 10},
		{"geometry": {"type": "Point","coordinates": [1596,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, West"},
            "id": 11},
		{"geometry": {"type": "Point","coordinates": [2424,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, East"},
            "id": 12},
    ]
};

var npc = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [1906.25,2090.25]},
			"type": "Feature","properties": {"name": "Ronald"}},
		{"geometry": {"type": "Point","coordinates": [1906.25,2076.25]},
			"type": "Feature","properties": {"name": "Gani"}},
		{"geometry": {"type": "Point","coordinates": [1898.25,2025.75]},
			"type": "Feature","properties": {"name": "Manager"}},
		{"geometry": {"type": "Point","coordinates": [1897.75,1881.75]},
			"type": "Feature","properties": {"name": "Donna"}},
		{"geometry": {"type": "Point","coordinates": [1897.25,1745]},
            "type": "Feature","properties": {"name": "Rocky"}},
		{"geometry": {"type": "Point","coordinates": [1897.75,1629.75]},
            "type": "Feature","properties": {"name": "Elric"}}
    ]
};



{
"install": {
  "include": [
    "^package\\.json$",
    "^\\.env$"
  ]
},
"restart": {
  "include": [
    "^public/",
    "^dist/"
  ],
  "include": [
    "\\.js$",
    "\\.json"
  ]
},
"throttle": 900000
}
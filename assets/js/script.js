const groups = {
  "GROUP A": {
    "name": "GROUP A",
    "open": false,
    "desc": "description 1",
    "heading": "test",
    "items": [
      "item 1"
    ]
  },
  "GROUP B": {
    "name": "GROUP B",
    "open": false,
    "desc": "description 2",
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7"
    ]
  },
  "GROUP C": {
    "name": "GROUP C",
    "open": false,
    "desc": "description 3",
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5"
    ]
  },
  "GROUP D": {
    "name": "GROUP D",
    "open": false,
    "desc": "description 4",
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7"
    ]
  },
  "GROUP E": {
    "name": "GROUP E",
    "open": false,
    "desc": "description 5",
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5"
    ]
  }
}

new Vue({
  el: "#app",
  data: {
    groups: groups,
    heading: "Plan Communications",
    expandedGroup: []
  },
  methods: {
    isExpanded(key) {
      return this.expandedGroup.indexOf(key) !== -1;
    },
    toggleExpansion(key) {
      if (this.isExpanded(key))
        this.expandedGroup.splice(this.expandedGroup.indexOf(key), 1);
      else
        this.expandedGroup.push(key);
    }
  }

})
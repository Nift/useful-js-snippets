//Adds all values from obj2 to obj2
export default function extendObjects(obj1, obj2) {
    Object.keys(obj2).forEach(function(key) { obj1[key] = obj2[key]; });
    return obj1;
}
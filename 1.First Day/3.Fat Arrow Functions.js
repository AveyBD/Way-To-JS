// ES6 fat arrow function

var JavaLove = {
    name: "Javascript",
    libraries: ["React", "Angular", "Vue"],
    printLib: function () {
        this.libraries.forEach((a) =>  console.log(this.name + ' love ' + a));
    },
};
JavaLove.printLib();
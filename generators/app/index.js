import Generator from "yeoman-generator";

export default class extends Generator {
  async prompting() {
    const { typeApp, appName } = await this.prompt([
      {
        type: "list",
        name: "typeApp",
        message: "Select app?",
        choices: ["ReactJS App", "VueJS App"],
      },
      {
        type: "input",
        name: "appName",
        message: "Please enter the project name!",
      },
    ]);
    this.typeApp = typeApp;
    this.appName = appName;
  }

  writing() {
    if (this.typeApp === "ReactJS App") this._generatorReactApp();
    if (this.typeApp === "VueJS App") this._generatorVueApp();
  }

  _generatorReactApp() {
    this.fs.copy(
      this.templatePath("react-template"),
      this.destinationPath(`${this.appName}`)
    );
  }

  _generatorVueApp() {
    this.fs.copy(
      this.templatePath("vue-template"),
      this.destinationPath(`${this.appName}`)
    );
  }
}

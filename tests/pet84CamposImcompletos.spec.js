// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Pet8-4 Campos Imcompletos', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Pet8-4 Campos Incompletos', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 2064, height: 1128 })
    await driver.findElement(By.linkText("Iniciar Sesión")).click()
    await driver.findElement(By.css(".one .input")).click()
    await driver.findElement(By.css(".one .input")).sendKeys("ejemplo@gmail.com")
    await driver.findElement(By.css(".pass .input")).click()
    await driver.findElement(By.css(".pass .input")).sendKeys("123456")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.css("path")).click()
    await driver.findElement(By.css(".ant-cascader-menu-item:nth-child(4)")).click()
    await driver.findElement(By.id("register_nombre")).click()
    await driver.findElement(By.id("register_nombre")).sendKeys("Mu")
    await driver.findElement(By.id("register_ciudad")).click()
    await driver.findElement(By.id("register_ciudad")).sendKeys("Envigado")
    await driver.findElement(By.id("register_raza")).click()
    await driver.findElement(By.id("register_color")).click()
    await driver.findElement(By.id("register_color")).sendKeys("Blanco")
    await driver.findElement(By.id("register_edad")).click()
    await driver.findElement(By.id("register_edad")).sendKeys("5")
    await driver.findElement(By.id("register_color")).click()
    await driver.findElement(By.id("register_color")).sendKeys("Blanca")
    await driver.findElement(By.id("register_size")).click()
    await driver.findElement(By.css("#mediano > .ant-select-item-option-content")).click()
    await driver.findElement(By.id("register_tipo")).click()
    await driver.findElement(By.css("#Vaca > .ant-select-item-option-content")).click()
    await driver.findElement(By.css(".ant-upload > div")).click()
    await driver.findElement(By.css(".ant-col-xs-24 .ant-form-item-control-input-content > .ant-btn > span")).click()
  })
})
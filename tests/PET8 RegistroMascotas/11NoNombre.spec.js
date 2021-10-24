// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('1.1 No Nombre', function() {
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
  it('1.1 No Nombre', async function() {
    // Test name: 1.1 No Nombre
    // Step # | name | target | value
    // 1 | open | /pet/register | 
    await driver.get("http://localhost:3000/pet/register")
    // 2 | setWindowSize | 1294x741 | 
    await driver.manage().window().setRect({ width: 1294, height: 741 })
    // 3 | click | id=register_ciudad | 
    await driver.findElement(By.id("register_ciudad")).click()
    // 4 | click | id=register_ciudad | 
    await driver.findElement(By.id("register_ciudad")).click()
    // 5 | type | id=register_ciudad | Envigado
    await driver.findElement(By.id("register_ciudad")).sendKeys("Envigado")
    // 6 | click | id=register_raza | 
    await driver.findElement(By.id("register_raza")).click()
    // 7 | type | id=register_raza | Angus
    await driver.findElement(By.id("register_raza")).sendKeys("Angus")
    // 8 | click | id=register_color | 
    await driver.findElement(By.id("register_color")).click()
    // 9 | type | id=register_color | Blanca
    await driver.findElement(By.id("register_color")).sendKeys("Blanca")
    // 10 | click | id=register_edad | 
    await driver.findElement(By.id("register_edad")).click()
    // 11 | type | id=register_edad | 5
    await driver.findElement(By.id("register_edad")).sendKeys("5")
    // 12 | click | id=register_size | 
    await driver.findElement(By.id("register_size")).click()
    // 13 | click | css=#mediano > .ant-select-item-option-content | 
    await driver.findElement(By.css("#mediano > .ant-select-item-option-content")).click()
    // 14 | click | id=register_tipo | 
    await driver.findElement(By.id("register_tipo")).click()
    // 15 | click | css=#Vaca > .ant-select-item-option-content | 
    await driver.findElement(By.css("#Vaca > .ant-select-item-option-content")).click()
    // 16 | click | css=.ant-upload > .ant-upload | 
    await driver.findElement(By.css(".ant-upload > .ant-upload")).click()
    // 17 | click | css=.ant-col-xs-24 .ant-form-item-control-input-content > .ant-btn > span | 
    await driver.findElement(By.css(".ant-col-xs-24 .ant-form-item-control-input-content > .ant-btn > span")).click()
  })
})

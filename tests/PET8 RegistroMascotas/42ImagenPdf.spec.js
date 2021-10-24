// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('4.2 Imagen Pdf', function() {
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
  it('4.2 Imagen Pdf', async function() {
    // Test name: 4.2 Imagen Pdf
    // Step # | name | target | value
    // 1 | open | /pet/register | 
    await driver.get("http://localhost:3000/pet/register")
    // 2 | setWindowSize | 1294x741 | 
    await driver.manage().window().setRect({ width: 1294, height: 741 })
    // 3 | click | id=register_nombre | 
    await driver.findElement(By.id("register_nombre")).click()
    // 4 | type | id=register_nombre | Mona
    await driver.findElement(By.id("register_nombre")).sendKeys("Mona")
    // 5 | click | id=register_ciudad | 
    await driver.findElement(By.id("register_ciudad")).click()
    // 6 | type | id=register_ciudad | Envigado
    await driver.findElement(By.id("register_ciudad")).sendKeys("Envigado")
    // 7 | click | id=register_raza | 
    await driver.findElement(By.id("register_raza")).click()
    // 8 | type | id=register_raza | Angus
    await driver.findElement(By.id("register_raza")).sendKeys("Angus")
    // 9 | click | id=register_color | 
    await driver.findElement(By.id("register_color")).click()
    // 10 | type | id=register_color | Blanca
    await driver.findElement(By.id("register_color")).sendKeys("Blanca")
    // 11 | click | id=register_edad | 
    await driver.findElement(By.id("register_edad")).click()
    // 12 | type | id=register_edad | 5
    await driver.findElement(By.id("register_edad")).sendKeys("5")
    // 13 | click | id=register_size | 
    await driver.findElement(By.id("register_size")).click()
    // 14 | click | css=#mediano > .ant-select-item-option-content | 
    await driver.findElement(By.css("#mediano > .ant-select-item-option-content")).click()
    // 15 | click | id=register_tipo | 
    await driver.findElement(By.id("register_tipo")).click()
    // 16 | click | css=#Vaca > .ant-select-item-option-content | 
    await driver.findElement(By.css("#Vaca > .ant-select-item-option-content")).click()
    // 17 | click | css=.anticon-plus > svg | 
    await driver.findElement(By.css(".anticon-plus > svg")).click()
    // 18 | runScript | window.scrollTo(0,1525) | 
    await driver.executeScript("window.scrollTo(0,1525)")
    // 19 | click | css=.ant-upload > .ant-upload | 
    await driver.findElement(By.css(".ant-upload > .ant-upload")).click()
    // 20 | click | css=.ant-col-xs-24 .ant-btn > span | 
    await driver.findElement(By.css(".ant-col-xs-24 .ant-btn > span")).click()
  })
})

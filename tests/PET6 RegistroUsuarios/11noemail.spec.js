// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('1.1 no email', function() {
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
  it('1.1 no email', async function() {
    // Test name: 1.1 no email
    // Step # | name | target | value
    // 1 | open | /signup | 
    await driver.get("http://localhost:3000/signup")
    // 2 | setWindowSize | 1294x741 | 
    await driver.manage().window().setRect({ width: 1294, height: 741 })
    // 3 | click | id=register_pwd | 
    await driver.findElement(By.id("register_pwd")).click()
    // 4 | type | id=register_pwd | 123456
    await driver.findElement(By.id("register_pwd")).sendKeys("123456")
    // 5 | click | id=register_confirm | 
    await driver.findElement(By.id("register_confirm")).click()
    // 6 | type | id=register_confirm | 123456
    await driver.findElement(By.id("register_confirm")).sendKeys("123456")
    // 7 | click | id=register_nombre | 
    await driver.findElement(By.id("register_nombre")).click()
    // 8 | type | id=register_nombre | prueba
    await driver.findElement(By.id("register_nombre")).sendKeys("prueba")
    // 9 | click | id=register_telefono | 
    await driver.findElement(By.id("register_telefono")).click()
    // 10 | type | id=register_telefono | 123456
    await driver.findElement(By.id("register_telefono")).sendKeys("123456")
    // 11 | click | id=register_ciudad | 
    await driver.findElement(By.id("register_ciudad")).click()
    // 12 | type | id=register_ciudad | Medellín
    await driver.findElement(By.id("register_ciudad")).sendKeys("Medellín")
    // 13 | click | css=.ant-col-xs-24 .ant-btn | 
    await driver.findElement(By.css(".ant-col-xs-24 .ant-btn")).click()
    // 14 | mouseOver | css=.ant-col-xs-24 .ant-btn | 
    {
      const element = await driver.findElement(By.css(".ant-col-xs-24 .ant-btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 15 | mouseOut | css=.ant-col-xs-24 .ant-btn | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})

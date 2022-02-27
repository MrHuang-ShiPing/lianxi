// 利用mock提供mock接口
import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'


// 语法
Mock.mock(
    '/mock/recommends',{code:200,data:recommends}
)
Mock.mock(
    '/mock/floors',{code:200,data:floors}
)
console.log(1111)
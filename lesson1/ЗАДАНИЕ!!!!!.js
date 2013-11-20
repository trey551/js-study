ЗАДАНИЕ!!!!!
[15:44:56] Pavel Voronin: var a = [{
            array: [{
                age: {
                    a:'string'
                }
            }]
        }]
[15:45:02] Pavel Voronin: достучаться до строки string
[15:45:18] Pavel Voronin: написать селектор вида a[index].property и так далее
[15:46:03] Pavel Voronin: ты просто каскадно спускаешь вниз к строчке, ты можешь консолить и сохранять промежуточный результат например
[15:46:24] Pavel Voronin: типа nestedObject = a[0]

array = a.array;
[15:46:31] Pavel Voronin: и спускаться вниз так до сктроки string
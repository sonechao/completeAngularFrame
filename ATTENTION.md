开发中遇到的问题记录：
	1.对于每个板块需要一个同名js的问题，以及需要先加载同名js后再加载其他js。
		出现在gulp打包的时候没有注意要先加载同名js。修改配置后就是按需先加载的同名js。
		添加代码：
		path.join(modulesPath, folder, '/js/'+folder+'.js'),
		path.join(modulesPath, folder, '/js/!('+folder+').js')



		
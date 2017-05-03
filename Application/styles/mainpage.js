
const theme = "#29487d"


const Template = {
					container : 
					{
						flex : 1
					},
					header : {
							backgroundColor : theme,
							alignItems : 'center',
							justifyContent : 'center',
							borderBottomWidth :10,
							borderBottomColor : '#ddd'
					},
					headerText : 
					{
						color : 'white',
						fontSize : 18,
						padding : 26
					},
					scrollContainer : {
						flex : 1,
						marginBottom : 100
					},
					footer : 
					{
						position : 'absolute',
						alignItems : 'center',
						bottom : 0,
						left : 0 ,
						right : 0
					},
					addButton : {
							backgroundColor : theme,
							width : 90,
							height : 90,
							borderRadius : 50,
							borderColor : '#ccc',
							alignItems : 'center',
							justifyContent : 'center',
							elevation : 8,
							marginBottom : -45,
							zIndex : 10
					},
					addButtonText : 
					{
						color : '#FFF',
						fontSize : 24
					},
					TextInput : 
					{
						alignSelf : 'stretch',
						color : '#FFF',
						padding : 20,
						paddingTop : 46 ,
						backgroundColor : '#252525',
						borderTopWidth : 2,
						borderTopColor : "#ededed"
					}
			}

export default Template;

import React from 'react';
import $ from 'jquery';

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

$('#id').on('click',function(){
    alert('hello world')
})


const Res = () => {
    return (
        <>
            <p>React Progress Bar</p>
            <Progress done="70"/>
            <Progress done="100"/>
	    </>
    );
}

export default Res;

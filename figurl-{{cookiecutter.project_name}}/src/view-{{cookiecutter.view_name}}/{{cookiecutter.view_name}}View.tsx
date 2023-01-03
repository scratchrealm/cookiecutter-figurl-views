import { FunctionComponent } from "react";
import { {{cookiecutter.view_name}}ViewData } from "./{{cookiecutter.view_name}}ViewData";

type Props = {
	data: {{cookiecutter.view_name}}ViewData
	width: number
	height: number
}

const {{cookiecutter.view_name}}View: FunctionComponent<Props> = ({data, width, height}) => {
	const {text} = data
	
	return (
		<div>
			{text}
		</div>
	)
}

export default {{cookiecutter.view_name}}View
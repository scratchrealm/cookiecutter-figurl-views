import { ViewComponentProps } from "@figurl/core-views"
import { FunctionComponent } from "react"
import {{cookiecutter.view_name}}View from "./view-{{cookiecutter.view_name}}/{{cookiecutter.view_name}}View"
import { is{{cookiecutter.view_name}}ViewData } from "./view-{{cookiecutter.view_name}}/{{cookiecutter.view_name}}ViewData"

const loadView = (o: {data: any, width: number, height: number, opts: any, ViewComponent: FunctionComponent<ViewComponentProps>}) => {
    const {data, width, height} = o
    if (is{{cookiecutter.view_name}}ViewData(data)) {
        return <{{cookiecutter.view_name}}View data={data} width={width} height={height} />
    }
    else return undefined
}

export default loadView
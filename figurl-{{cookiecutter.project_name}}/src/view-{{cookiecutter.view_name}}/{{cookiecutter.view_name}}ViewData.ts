import { isEqualTo, isString, validateObject } from "@figurl/core-utils"

export type {{cookiecutter.view_name}}ViewData = {
    type: '{{cookiecutter.project_name}}.{{cookiecutter.view_name}}',
    text: string
}

export const is{{cookiecutter.view_name}}ViewData = (x: any): x is {{cookiecutter.view_name}}ViewData => {
    return validateObject(x, {
        type: isEqualTo('{{cookiecutter.project_name}}.{{cookiecutter.view_name}}'),
        text: isString
    })
}
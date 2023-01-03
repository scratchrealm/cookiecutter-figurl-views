import figurl as fig


def main():
    data = {
        'type': '{{cookiecutter.project_name}}.{{cookiecutter.view_name}}',
        'text': 'Test {{cookiecutter.view_name}}'
    }
    F = fig.Figure(data=data, view_url='http://localhost:3000')
    print(F.url(label='test {{cookiecutter.project_name}}'))

if __name__ == '__main__':
    main()

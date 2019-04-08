# 🐍 Coding Standards

This is not "final". **Pull requests welcome** to evolve it over time.

- [🐍 Coding Standards](#%F0%9F%90%8D-coding-standards)
  - [Documentation](#documentation)
  - [Testing](#testing)
  - [Coding style / Linting](#coding-style--linting)
  - [Exceptions](#exceptions)
  - [Code Organisation](#code-organisation)
  - [Project folder layout](#project-folder-layout)
  - [Python Packaging](#python-packaging)
  - [Deployment](#deployment)
  - [Configuration](#configuration)
- [Structure](#structure)
  - [File, class, function length](#file-class-function-length)
  - [Code flow](#code-flow)
    - [Naming](#naming)
      - [General Naming Guidelines](#general-naming-guidelines)
      - [Indentation](#indentation)
      - [Imports](#imports)


## Documentation

- Each project must have a README.md file.
- README file must provide instructions to: build project, run tests, run project locally.

## Testing

- Always strive for 100% test coverage (with auto generated code and configuration variable modules being reasonable exceptions).
- Tests must be written using py.test (https://docs.pytest.org).
- Coverage levels should be reported in CI builds.
- Tests should be integration tests where possible. Try not to go overboard with Mocking (vague statement, judge case by case).
- ReactJS components must have unit tests.
- If the application has a front-end, user journeys should be covered with selenium (BDD style or other) tests, to ensure they continue to function.
- Unhappy paths and edge case scenarios must be tested for, not just the happy path.

## Coding style / Linting

- Each project must have a [flake8](https://pypi.python.org/pypi/flake8) linter.
- Python Script to : Check syntax and lint the python code based on PEP8 standard and Auto-correct according to PEP8 standard and remove .pyc files [pep8-checker](https://github.com/nitinbhojwani/pep8-checker)
- Each project must follow [PEP8](https://www.python.org/dev/peps/pep-0008/) (inc. 79 chars limit).
- Docstrings must follow PEP257 (https://www.python.org/dev/peps/pep-0257/).
- Docstrings must be in [Google style](http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html), use [pydocstyle](https://github.com/PyCQA/pydocstyle) to validate.
- Functions with more than 1 parameter must [force keyword arguments](https://www.python.org/dev/peps/pep-3102/).
- All class `__init__` methods must [force keyword arguments](https://www.python.org/dev/peps/pep-3102/).
- Follow Python [EAFP principal](http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html#eafp-vs-lbyl) where possible.
- Use relative absolute imports within projects, full absolute imports in testing code.

  ```python
  # in testing code
  from project.subpackage import magic_beans
  # in project code
  from .sub_package import magic_beans
  ```
- Don't use single letter variable names, unless within a list comprehension.
- Never put any code in the `__init__.py` of a module (except namespace stitching imports).
- Use f-strings (https://www.python.org/dev/peps/pep-0498/) instead of `str.format`.

## Exceptions

- Only define custom exceptions when you have a need to catch it specifically.
- Use [standard libary exceptions](https://docs.python.org/3/library/exceptions.html) where possible.
- Always include a descriptive message when an exception is raised.

## Code Organisation

- Project should have a single top-level Python package.
- Project requirements must be split into `requirements.txt` `requirements-dev.txt` files etc.


## Project folder layout

Each git repository should contain one logical unit of related code. This usually means one module
per repository. Within that repository, some or all of the following files should be present:

```
README.rst
LICENSE
setup.py
requirements.txt
docs/conf.py
docs/index.md
tests/test_modname.py
modname/__init__.py
modname/core.py
modname/helpers.py
```

or for simple modules, replace the modname folder with

```
modname.py
```


## Python Packaging

- Python Packages must follow [Semantic Versioning](http://semver.org/).
- Must contain a HISTORY.rst file.
- Must use [Zest.releaser](https://zestreleaser.readthedocs.io/en/latest/) for releases.



See more details on project layout [here](http://docs.python-guide.org/en/latest/writing/structure/) 
or at the [PEP0328](https://www.python.org/dev/peps/pep-0328/) page.




## Deployment

- Project must contain a `Dockerfile` for deployment.
- Project must include an Ansible + AWS Cloudformation configuration for deployment.

## Configuration

- Project configration must come from environment variables, no hardcoded per-environment values in the codebase.
- Deployment Secrets must be stored in ansible-vault.


# Structure

## File, class, function length

Files should ideally be less than 350 lines, classes should be less than 150 lines, functions should be less than 50 lines

If functions or classes are getting too long, consider the [single responsibility principle](https://medium.com/@graeme_boy/designing-code-using-the-single-responsibility-principle-ff4433734fdb)

If files are getting too long, consider breaking files into more functional files:

**Example**
- `models.py`

Can become

- `models/`
    - `advertisers.py`
    - `domains.py`
    - `etc`
    
Avoid circular dependencies by clearly defining the flow through the application
    
## Code flow
Short circuit when possible, avoid excessive code blocks and indentation

**Yes**
```
def foobar(cannot_be_none, var):
    if cannot_be_none is None:
        return
        
    if cannot_be_none is not var:
        return
    
    return var[cannont_be_none]
```

**No**
```
def foobar(cannot_be_none, var):
    if cannot_be_none is not None:
        if cannot_be_none is in var:
            return var[cannont_be_none]
```

### Naming

- Variables, functions, methods, packages, modules
    - `lower_case_with_underscores`
- Classes and Exceptions
    - `CapWords`
- Protected methods and internal functions
    - `_single_leading_underscore(self, ...)`
- Private methods
    - `__double_leading_underscore(self, ...)`
- Constants
    - `ALL_CAPS_WITH_UNDERSCORES`

Naming can be implied from the directory structure, if import names conflict, alias the import

**Yes**

`adwords/client.py`
```
class InvalidAccount(Exception):
    pass
    
    
class Client(object):
    ...
```
`common/views.py`
```
from adwords import client as adwords_client
...
```

**No**

`adwords/client.py`
```
class AdwordsInvalidAccount(Exception):
    pass
    
    
class AdwordsClient(object):
    ...
```

#### General Naming Guidelines 

Avoid one-letter variables (esp. `l`, `O`, `I`). 

For very short blocks, when the meaning is clearly visible from the immediate context, use a double one-letter variable.

**Fine**
```python
for ee in elements:
    ee.mutate()
```
Avoid abbrevations (passwd vs password, adm vs admin, etc)

Avoid redundant labeling.

**Yes**
```python
import audio

core = audio.Core()
controller = audio.Controller()
```

**No**
```python
import audio

core = audio.AudioCore()
controller = audio.AudioController()
```

Prefer "reverse notation".

**Yes**
```python
elements = ...
elements_active = ...
elements_defunct = ...
```

**No**
```python
elements = ...
active_elements = ...
defunct_elements ...
```

Avoid getter and setter methods.

**Yes**
```python
person.age = 42
```

**No**
```python
person.set_age(42)
```

#### Indentation

Use 4 spaces--never tabs. Enough said.

#### Imports

Import entire modules instead of individual symbols within a module. For example, for a top-level module `canteen` that has a file `canteen/sessions.py`,

**Yes**

```python
import canteen
import canteen.sessions
from canteen import sessions
```

**No**

```python
from canteen import get_user  # Symbol from canteen/__init__.py
from canteen.sessions import get_session  # Symbol from canteen/sessions.py
```

*Exception*: For third-party code where documentation explicitly says to import individual symbols.

*Rationale*: Avoids circular imports. See [here](https://sites.google.com/a/khanacademy.org/forge/for-developers/styleguide/python#TOC-Imports).

Put all imports at the top of the page with three sections, each separated by a blank line, in this order:

1. System imports
2. Third-party imports
3. Local source tree imports

*Rationale*: Makes it clear where each module is coming from.


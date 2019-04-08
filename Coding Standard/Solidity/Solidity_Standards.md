## Coding Standard Rules For Solidity.

 - Can't commit to version control any piece of code which doesn't match some rules
 - No more than one statement per line. 
 - Test class must start with the name of the class they are testing followed by ‘Test’. E.g. ServerConfigurationTest.
 - Use Test Driven Development. [Recommendation. Cannot be enforced.]
 

## Naming Conventions
Indentation
 - Use 4 spaces per indentation level.
 - Mixing tabs and spaces should be avoided.

## Blank Lines
 - Surround top level declarations in solidity source with two blank lines.
 - Within a contract surround function declarations with a single blank line.

## Layout
 -Keeping lines under a maximum of 79 (or 99) characters helps readers easily parse the code.
 -The first argument should not be attached to the opening parenthesis.
 -One, and only one, indent should be used.
 -Each argument should fall on its own line.
 -The terminating element, );, should be placed on the final line by itself.


## Source File Encoding
 - UTF-8 or ASCII encoding is preferred.

## Imports
Import statements should always be placed at the top of the file.


## Order of Functions
 - Ordering helps readers identify which functions they can call and to find the constructor and fallback definitions easier.

 - Functions should be grouped according to their visibility and ordered:

	constructor
	fallback function (if exists)
	external
	public
	internal
	private

## Whitespace in Expressions
 - Avoid extraneous whitespace in the following situations
 - Immediately inside parenthesis, brackets or braces, with the exception of single line function declarations.

## Control Structures
 - The braces denoting the body of a contract, library, functions and structs should
 - open on the same line as the declaration
 - close on their own line at the same indentation level as the beginning of the declaration.
 - The opening brace should be proceeded by a single space.


## Function Declaration
 - For short function declarations, it is recommended for the opening brace of the function body to be kept on the same line as the function declaration.
 - The closing brace should be at the same indentation level as the function declaration.
 - The opening brace should be preceded by a single space.
 - You should explicitly label the visibility of all functions, including constructors.
 - The visibility modifier for a function should come before any custom modifiers.
 - If a long function declaration has modifiers, then each modifier should be dropped to its own line.
 - For constructor functions on inherited contracts whose bases require arguments, it is recommended to drop the base constructors onto new lines in the same manner as modifiers if the function declaration is long or hard to read.

## Mappings
 - In variable declarations, do not separate the keyword mapping from its type by a space. Do not separate any nested mapping keyword from its type by whitespace

## Variable Declarations
 - Declarations of array variables should not have a space between the type and the brackets.

## Other Recommendations
 - Strings should be quoted with double-quotes instead of single-quotes.
 - Surround operators with a single space on either side.


## Order of Layout
 - Layout contract elements in the following order:

	Pragma statements
	Import statements
	Interfaces
	Libraries
	Contracts

 - Inside each contract, library or interface, use the following order:

	Type declarations
	State variables
	Events
        Functions


## Naming Styles
- To avoid confusion, the following names will be used to refer to different naming styles.

	b (single lowercase letter)
	B (single uppercase letter)
	lowercase
	lower_case_with_underscores
	UPPERCASE
	UPPER_CASE_WITH_UNDERSCORES
	CapitalizedWords (or CapWords)
	mixedCase (differs from CapitalizedWords by initial lowercase character!)
	Capitalized_Words_With_Underscores


## Struct Names
 - Structs should be named using the CapWords style. Examples: MyCoin, Position, PositionXY.

## Event Names
 - Events should be named using the CapWords style. Examples: Deposit, Transfer, Approval, BeforeTransfer, AfterTransfer.

## Function Names
 - Functions other than constructors should use mixedCase. Examples: getBalance, transfer, verifyOwner, addMember, changeOwner.

## Function Argument Names
 - Function arguments should use mixedCase. Examples: initialSupply, account, recipientAddress, senderAddress, newOwner.




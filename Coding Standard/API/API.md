# API Resource Nomenclature & Best Practices

This document aims at making REST API development at McKinley & Rice a more predictable and more conforming with best practices. Please treat this as a manual and not a recommendation.

## Keywords
We need to get a few important words out of the way before we dive deep into REST API territory, these are:

### Resources 
Every __thing__ you can access using an API is called a resource (Ex. `users`, `posts`, `photos` etc.). Resources are __always__ nouns.

Good resource name: `users`

Bad resource name: `getUsers`

### Endpoints
You can access these things __from__ endpoints. 

URL:
```
http://example.com/api/v1/users
```

Endpoint: 
```
/api/v1/users
```

All of these endpoints are named arround resources in plural and __not__ actions as verbs.

Good endpoint name:
```
/api/v1/users
```

Bad enpoint name: 
```
/api/v1/user
```

Very bad endpoint name: 
```
/api/v1/getUsers
```

### Identifiers and Queries

Identifiers are unique integers/strings that are used to, well, identify a specific instance of a resource. Lets say we had to get details of a `user` with an id of `42`, the URL that we will need to hit will look something like:

```
url/resource/:id
```

which translates to

```
http://example.com/api/v1/users/42
```

Queries are parameters used to sort or filter resources according to certain conditions. Multiple queries can be concatenated (usually preceded by a `?` and seperated by `&`) as a part of the URL to get a refined set of resources. Lets say we require a list of `users` who are from India (IN) and under the age of 32, the URL will looking something like:

```
http://example.com/api/v1/users?country=IN&maxAge=32
```

where

| Parameter | Value |
| --------- | ----- |
| country   | IN    |
| maxAge    | 32    |



## Naming Resources

## Defining Endpoints

### Nesting resources

## Request Format

## Response Format

### HATEOAS

## HTTP Status Codes

## Best Practices 
### Use HTTP headers for serialization
### Add sorting capability
### Add filtering capability
### Allow field selection
### Paging
### Versioning 
### Error Payloads
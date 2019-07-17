# API Resource Nomenclature & Best Practices

This document aims at making REST API development at McKinley & Rice a more predictable and more conforming with best practices. Please treat this as a manual and not a recommendation.

## Keywords
We need to get a few important words out of the way before we dive deep into REST API territory, these are:

### Resources 
Every *thing* you can access using an API is called a resource (Ex. `users`, `posts`, `photos` etc.). Resources are *always* nouns.

Good resource name: `users`
Bad resource name: `getUsers`

### Endpoints
You can access these things *from* endpoints. 

URL: `http://example.com/api/v1/users`
Endpoint: `/api/v1/users` 

All of these endpoints are named arround resources in plural and *not* actions as verbs.

Good endpoint name: `/api/v1/users`
Bad enpoint name: `/api/v1/user`
Very bad endpoint name: `/api/v1/getUsers`

### Identifiers
### Queries 

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
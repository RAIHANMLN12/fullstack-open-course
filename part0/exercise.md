Exercise 4 - 6

Create sequence diagram for new note in https://studies.cs.helsinki.fi/exampleapp/spa website


Sequence Diagram:

```sequenceDiagram
    participant browser
    participant server
    participant user

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes (new note data)
    activate server
    server-->>browser: 201 Created (response with new note data)
    deactivate server

    browser->>user: Show success message (e.g., "Note created successfully!")
```


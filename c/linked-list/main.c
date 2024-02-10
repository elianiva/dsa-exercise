#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    void *data;
    struct Node *next;
} Node;

Node *LL_new_node(void *data)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    return node;
}

void LL_append(Node *head, void *data)
{
    Node *current = head;
    while (current->next != NULL)
    {
        current = current->next;
    }
    current->next = LL_new_node(data);
}

void LL_prepend(Node **head, void *data)
{
    Node *new_node = LL_new_node(data);
    new_node->next = *head;
    *head = new_node;
}

void LL_pop(Node **head)
{
    Node *current = *head;
    while (current->next->next != NULL)
    {
        current = current->next;
    }
    free(current->next);
    current->next = NULL;
}

void LL_print(Node *head)
{
    Node *current = head;
    while (current != NULL)
    {
        printf("%s\n", (char *)current->data);
        current = current->next;
    }
}

void LL_free(Node *head)
{
    // we want to free the memory allocated for each node hence iterate through the list
    while (head != NULL)
    {
        Node *temp = head;
        head = head->next;
        free(temp);
    }
}

int main(void)
{
    Node *head = LL_new_node("Hello");
    LL_append(head, "World");
    LL_prepend(&head, "Hey");
    LL_pop(&head);
    LL_print(head);
    LL_free(head);
    return 0;
}

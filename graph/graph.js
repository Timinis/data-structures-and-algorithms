'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    this.size++;
  }

  addDirectedEdge(originVertex, directedVertex, weight) {
    if (
      !this.adjacencyList.has(originVertex) ||
      !this.adjacencyList.has(directedVertex)
    ) {
      return 'Error';
    }
    const adjacency = this.adjacencyList.get(originVertex);
    adjacency.push(new Edge(directedVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return 'error';
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }

  getNodes() {
    return Map.adjacencyList.keys();
  }
}

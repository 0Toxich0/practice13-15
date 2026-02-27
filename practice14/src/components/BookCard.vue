<template>
  <div class="book-card" :class="{ completed: book.completed }">
    <div class="book-info">
      <h3>
        {{ book.title }}
        <span v-if="book.favorite" class="favorite-star">⭐</span>
      </h3>
      <p class="author">{{ book.author }}</p>
      <span class="genre">{{ book.genre }}</span>
    </div>
    
    <div class="book-actions">
      <div v-if="book.completed" class="rating">
        <span 
          v-for="star in 5" 
          :key="star"
          @click="$emit('rate', star)"
          :class="{ active: star <= book.rating }"
        >★</span>
      </div>
      
      <div class="buttons">
        <button 
          @click="$emit('toggle')" 
          class="btn"
          :class="book.completed ? 'btn-secondary' : 'btn-primary'"
        >
          {{ book.completed ? '✓ Прочитано' : 'Отметить' }}
        </button>
        
        <button 
          @click="toggleFavoriteLocal" 
          class="btn"
          :class="book.favorite ? 'btn-warning' : 'btn-outline'"
          title="Избранное"
        >
          ⭐
        </button>
        
        <button @click="$emit('delete')" class="btn btn-danger">
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['book'])
const emit = defineEmits(['toggle', 'delete', 'rate', 'favorite'])

const toggleFavoriteLocal = () => {
  emit('favorite', props.book.id)
}
</script>

<style scoped>
.book-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border: 1px solid #eee;
}

.book-card.completed {
  background: #f0f7f0;
  opacity: 0.9;
}

.book-info {
  flex: 1;
}

.book-info h3 {
  margin-bottom: 4px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
}

.favorite-star {
  color: gold;
  font-size: 1.2em;
}

.author {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 4px;
}

.genre {
  background: #e0e0e0;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  display: inline-block;
}

.book-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.rating {
  display: flex;
  gap: 2px;
}

.rating span {
  font-size: 20px;
  cursor: pointer;
  color: #ddd;
  transition: color 0.2s;
}

.rating span.active {
  color: gold;
}

.rating span:hover {
  transform: scale(1.2);
  color: gold;
}

.buttons {
  display: flex;
  gap: 5px;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.3s;
  min-width: 40px;
}

.btn-primary {
  background: #4CAF50;
  color: white;
}

.btn-primary:hover {
  background: #45a049;
}

.btn-secondary {
  background: #2196F3;
  color: white;
}

.btn-secondary:hover {
  background: #1e87db;
}

.btn-danger {
  background: #f44336;
  color: white;
  padding: 8px 12px;
}

.btn-danger:hover {
  background: #da190b;
}

.btn-warning {
  background: #f39c12;
  color: white;
}

.btn-warning:hover {
  background: #e67e22;
}

.btn-outline {
  background: white;
  border: 1px solid #ddd;
  color: #333;
}

.btn-outline:hover {
  background: #f5f5f5;
}
</style>
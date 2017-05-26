'use strict'

/**
 * This module find and replace the received content
 * by an object of properties.
 * @return {String}
 */
module.exports = (
  () => {
    /**
     * Create a new regex based on the given property name.
     * @param  {String} property
     * @return {RegExp}
     */
    const regex = property => {
      const match = `<%${property}%>`
      return new RegExp(match, 'g')
    }

    /**
     * Find and replace every instance of the given property
     * and returns the result of the operation.
     * @param  {String} content
     * @param  {Object} properties
     * @param  {String} property
     * @return {String}
     */
    const replace = (content, properties, property) => {
      const find = regex(property)
      const replace = properties[property]
      return content.replace(find, replace)
    }

    return (content, properties) => {
      return Object.keys(properties).reduce(
        (content, property) => {
          return replace(content, properties, property)
        }, content
      )
    }
  }
)()
